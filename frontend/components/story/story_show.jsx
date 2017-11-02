import React from 'react';
import { withrouter } from 'react-router';
import { Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';

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
      let edit;
      if (!!this.props.currentUser) {
        edit = this.props.currentUser.id == story.author_id ? <Link className='edit' to={`/api/stories/${story.id}/edit`}>Edit</Link> : null;
      }
      const storyPs = story.body.split('\n').map((p, i) => <p key={i}>{p}</p>);
      return (
        <div>
          <div className='main-header'>
            <a className="about" href="#">About membership</a>
            <div className='nav-div'>
              <Link to='/'>ExtraLarge</Link>
            </div>
            <div className='greeting-div'>
              <GreetingContainer />
              {edit}
            </div>
          </div>
          <article className='article'>
            <div className='story-user'>
              <div className='story-avatar'>
                <img
                  src={story.avatar_url}
                  className='story-avatar-img'
                  ></img>
              </div>
              <div className='author-info'>
                <div className='author-name'>
                  <h5>{story.author_name}</h5>
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
        </div>
      );
    }
  }
}

export default StoryShow;
