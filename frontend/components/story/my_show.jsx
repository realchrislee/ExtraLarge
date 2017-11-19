import React from 'react';
import MyShowItem from './my_show_item';
import GreetingContainer from '../greeting/greeting_container';
import { Link, Redirect } from 'react-router-dom';

class MyShow extends React.Component {
  constructor(props) {
    super(props);
    this.itemDropdown = this.itemDropdown.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchStories();
  }

  itemDropdown(e) {
    e.preventDefault();
      $(e.currentTarget.nextSibling).removeClass('hidden');
    $(e.currentTarget).off('click', this.itemDropdown);
    $(document).on('click', this.itemHideDropdown);
  }

  itemHideDropdown() {
    $('.s-dropdown').addClass('hidden');
    $('.s-dropdown-button').on('click', this.itemDropdown);
    $(document).off('click', this.itemHideDropdown);
  }

  handleDelete(id) {
    this.props.deleteStory(id);
  }

  render() {
    if(!this.props.currentUser) return <Redirect to='/' />;
    const stories = this.props.stories.reverse().map((story, i) => {
      return (
        <div className='show-item' key={i}>
          <MyShowItem
            key={story.id}
            story={story}
            />
          <button className='s-dropdown-button' onClick={this.itemDropdown}>
            <i className="fa fa-angle-down" aria-hidden="true"></i>
          </button>
          <div className='s-dropdown hidden'>
            <ul>
              <li>
                <Link to={`/api/stories/${story.id}/edit`}>Edit story</Link>
              </li>
              <li>
                <button className='s-delete' onClick={this.handleDelete.bind(null, story.id)}>Delete story</button>
              </li>
            </ul>
          </div>
        </div>
      );
    });
    return (
      <div>
        <div className='main-header'>
          <a className="about" href="#">About membership</a>
          <div className='nav-div'>
            <Link to='/'>ExtraLarge</Link>
          </div>
          <div className='greeting-div'>
            <GreetingContainer />
          </div>
        </div>
        <div className='p-container'>
          <div className='p-header'>
            <h4>Your stories</h4>
            <div className='n-s-button'>
              <Link to='/new-story'>Write a story</Link>
            </div>
          </div>
          <div className='public'>
            <span>Public <span>{this.props.stories.length}</span></span>
          </div>
          <div className='p-titles'>
            <div>
              {stories}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyShow;
