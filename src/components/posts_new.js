import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router'

class PostsNew extends Component {
  render () {
    return (
      <form>
        <h3>Create a New Post</h3>
        <div className='form-group'>
          <label>Title</label>
          <input className='form-control' type='text' placeholder='Title' />
        </div>
        <div className='form-group'>
          <label>Categories</label>
          <input className='form-control' type='text' placeholder='Categories' />
        </div>
        <div className='form-group'>
          <label>Content</label>
          <textarea className='form-control'  placeholder='Describe' />
        </div>
        <button type='submit' className='btn btn-primary'>Submit</button>
        <Link to='/' className='btn btn-danger'>Cancel</Link>
      </form>


    )
  }
}

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content']
})(PostsNew);
