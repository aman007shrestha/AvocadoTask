import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { v4 as uuid } from 'uuid';
import axios from 'axios';
const Form2 = ({ setPosts }) => {
  const [data, setData] = useState({
    id: '',
    title: '',
    body: '',
    userId: '',
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    data.id = uuid();
    console.log(data);
    try {
      const url = 'https://jsonplaceholder.typicode.com/posts';
      const config = {
        header: {
          'content-type': 'application/json',
        },
      };
      await axios.post(url, data, config);
      toast.success('successfull');
      setPosts((post) => [...post, data]);
      setData({
        id: '',
        title: '',
        body: '',
        userId: '',
      });
    } catch (error) {
      toast.error(error);
    }
    // toast.success('successful', { autoClose: 3000 });
  };
  return (
    <article>
      <form action='' className='form'>
        <div className='form-control'>
          <label htmlFor='title'>Title : </label>
          <input
            type='text'
            name='title'
            className='inputField'
            id='title'
            placeholder='Enter Title'
            value={data.title}
            onChange={handleChange}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='body'>Body : </label>
          <input
            type='text'
            name='body'
            className='inputField'
            id='body'
            placeholder='Enter body'
            value={data.body}
            onChange={handleChange}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='userId'>User Id : </label>
          <input
            type='text'
            name='userId'
            className='inputField'
            id='userId'
            placeholder='Enter userId'
            value={data.userId}
            onChange={handleChange}
          />
        </div>

        <button
          type='submit'
          style={{ backgroundColor: '#1d2120' }}
          onClick={handleSubmit}
        >
          Add post
        </button>
      </form>
    </article>
  );
};

export default Form2;
