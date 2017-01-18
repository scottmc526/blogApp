import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { createPost } from '../actions/index';

class PostsNew extends Component {
  render () {
    const { fields: { title, categories, content }, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.props.createPost)}>
        <h3>Create a New Post</h3>
        <div className='form-group'>
          <label>Title</label>
          <input className='form-control' type='text' placeholder='Title' {...title} />
          <div className='text-help'>
            {title.touched ? title.error : ''}
          </div>
        </div>
        <div className='form-group'>
          <label>Categories</label>
          <input className='form-control' type='text' placeholder='Categories' {...categories} />
          <div className='text-help'>
            {categories.touched ? categories.error : ''}
          </div>
        </div>
        <div className='form-group'>
          <label>Content</label>
          <textarea className='form-control'  placeholder='Describe...' {...content} />
          <div className='text-help'>
            {content.touched ? content.error : ''}
          </div>
        </div>
        <button type='submit' className='btn btn-primary'>Submit</button>
        <Link to='/' className='btn btn-danger'>Cancel</Link>
      </form>
    )
  }
}

function validate (values) {
  const errors = {};

  if(!values.title) {
    errors.title = 'Enter a title fool';
  }
  if (!values.categories) {
    errors.categories = 'What\'s this noise about?';
  }
  if(!values.content) {
    errors.content = 'Why\'d you even come here'
  }

  return errors;
}

//connect: 1st argument is mapStateToProps, 2nd is mapDispatchToProps
//reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content'],
  validate
}, null, { createPost })(PostsNew);
