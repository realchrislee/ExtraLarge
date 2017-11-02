import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';

class StoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
    if (this.props.story) {
      this.state = this.props.story;
      this.state.imageUrl = this.props.story.image_url;
    } else {
      this.state = { title: '', body: '', imageFile: null, imageUrl: null };
    }
  }

  componentDidMount() {
    if (this.props.formType === 'edit') {
      this.props.fetchStory(this.props.match.params.id);
    }
    // if (this.props.errors) {
    //   this.props.clearErrors(this.props.errors);
    // }
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.story);
  }

  componentWillUnmount() {
    if (this.props.errors) {
      this.props.clearErrors(this.props.errors);
    }
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.target.value
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    // $('#publish').css({ cursor: 'wait' });
    // document.getElementById('publish').disabled = 'disabled';
    // document.getElementById('publish').value = 'Publishing';
    // document.getElementById('root').addEventListener('onStateChange', () => (document.getElementById('publish').disabled = ''));
    const file = this.state.imageFile;
    let formData = new FormData();
    formData.append("story[title]", this.state.title);
    formData.append("story[body]", this.state.body);
    if (file) formData.append("story[image]", file);
    const id = this.props.match.params.id ? this.props.match.params.id : null;
    this.props.action(formData, id).then((story) => {
      return this.props.history.push(`/api/stories/${story.story.id}`);
    });
  }

  renderErrors() {
    let myErrors = this.props.errors ? this.props.errors : [];
    return(
      <ul>
        {myErrors.map((error, i) => (
          <li
            className='error' key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  updateFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = function () {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    }.bind(this);
    if (file) {
      fileReader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: "", imageFile: null });
    }
  }

  render() {
    if(!this.props.currentUser) return <Redirect to='/' />;
    if(!this.state) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <div className='main-header'>
          <a className="about" href="#">About membership</a>
          <div className='nav-div'>
            <Link to='/'>ExtraLarge</Link>
          </div>
          <div className='greeting-div'>
            <GreetingContainer />
            <input id='publish' form='story-form' className='publish' type='submit' value='Publish' />
          </div>
        </div>
        <div className='story-div'>
          {this.renderErrors()}
          <div className='story-user'>
            <div className='story-avatar'>
              <img
                src={this.props.currentUser.avatar_url}
                className='story-avatar-img'
                ></img>
            </div>
            <div className='author-info'>
              <div className='author-name'>
                <h5>{this.props.currentUser.name}</h5>
              </div>
            </div>
          </div>
          <form id='story-form' className='story-form' onSubmit={this.handleSubmit}>
            <br/>
            <img src={this.state.imageUrl} />
            <br/>
            <label className='s-upload'>
              Upload image
              <input
                type='file'
                onChange={this.updateFile}
                />
            </label>
            <br/>
            <br/>
            <input
              type='text'
              className='s-title'
              value={this.state.title}
              onChange={this.update('title')}
              placeholder='Title' />
            <br/>
            <textarea
              value={this.state.body}
              onChange={this.update('body')}
              placeholder='Tell your story...'
              />
          </form>
        </div>
      </div>
    );
  }
}

export default StoryForm;
