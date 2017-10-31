import React from 'react';
import { withrouter } from 'react-router';

class StoryShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchStory(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.value !== this.props.value) {
      this.props.fetchStory(nextProps.match.params.id);
    }
  }

  render() {
    const story = this.props.story;
    if (!story) {
      return <div>Loading...</div>;
    } else {
      const storyPs = story.body.split('\n').map((p, i) => <p key={i}>{p}</p>);
      return (
        <article className='article'>
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
          <div className='section-figure'>
            <img src={story.image_url} />
          </div>
          <div className='article-div'>
            <section className='section'>
              <div className='section-content'>
                <div className='section-title'>
                  <h1>{ story.title }</h1>
                </div>
              </div>
            </section>
            <section className='section'>
              <div className='section-content'>
                <div className='section-inner'>
                  { storyPs }
                </div>
              </div>
            </section>
          </div>
        </article>
      );
    }
  }
}

export default StoryShow;
