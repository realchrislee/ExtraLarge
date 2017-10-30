import React from 'react';

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

  update(field) {
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state).then((story) => {
      return this.props.history.push(`/api/stories/${story.story.id}`);
    });
  }

  render() {
    const text = this.props.formType === 'new' ? 'Create Story' : 'Update Story';

    return (
      <div>
        <h3>{text}</h3>
        <form onSubmit={this.handleSubmit}>
          <br/>
          <h3
            value={this.state.title}
            onChange={this.update('title')}
            contentEditable='true'
            data-placeholder={this.state.title}
            ></h3>
          <br/>
          <label>Body
            <br/>
            <textarea
              value={this.state.body}
              onChange={this.update('body')} />
          </label>

          <input type='submit' value={text} />
        </form>
      </div>
    );
  }
}

export default StoryForm;
