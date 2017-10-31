import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class StoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.story;
  }

  componentDidMount() {
    if (this.props.match.params.id) {
      this.props.fetchPost(this.props.match.params.id);
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.post);
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
    this.props.action(this.state).then((story) => {
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

  render() {
    if(!this.props.currentUser) return <Redirect to='/' />;

    return (
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
        <form className='story-form' onSubmit={this.handleSubmit}>
          <br/>
          <input
            type='text'
            value={this.state.title}
            onChange={this.update('title')}
            placeholder='Title' />
          <br/>
          <br/>
          <textarea
            value={this.state.body}
            onChange={this.update('body')}
            placeholder='Tell your story...'
            />
          <br/>
          <input type='submit' value='Publish' />
        </form>
      </div>
    );
  }
}

export default StoryForm;
