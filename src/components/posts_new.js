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
        </div>
        <div className='form-group'>
          <label>Categories</label>
          <input className='form-control' type='text' placeholder='Categories' {...categories} />
        </div>
        <div className='form-group'>
          <label>Content</label>
          <textarea className='form-control'  placeholder='Describe...' {...content} />
        </div>
        <button type='submit' className='btn btn-primary'>Submit</button>
        <Link to='/' className='btn btn-danger'>Cancel</Link>
      </form>
    )
  }
}

//connect: 1st argument is mapStateToProps, 2nd is mapDispatchToProps
//reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content']
}, null, { createPost })(PostsNew);
