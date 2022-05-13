import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Form2 from '../components/Form/Form2';
import Spinner from '../components/Spinner';

const url = 'https://jsonplaceholder.typicode.com/posts';
const Task2 = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const getUsers = async () => {
    const response = await axios.get(url);
    setPosts(response.data);
    setIsLoading(false);
  };
  const removeItem = async (id) => {
    try {
      const config = {
        header: {
          'content-type': 'application/json',
        },
      };
      await axios.delete(url + `/${id}`, config);
      const newPosts = posts.filter((post) => post.id !== id);
      setPosts(newPosts);
      toast.success('delete successfull');
    } catch (error) {
      toast.error(error);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <Form2 setPosts={setPosts} />
      <hr />
      {isLoading && <Spinner />}
      <ul className='users'>
        {posts.reverse().map((post) => {
          const { id, userId, title, body } = post;
          return (
            <div key={id}>
              <li>
                <div>
                  <h4>{title}</h4>
                </div>
                <span>{body}</span>
                <h5>Created By: {userId}</h5>
                <button
                  type='button'
                  className='btn'
                  onClick={() => removeItem(id)}
                >
                  remove
                </button>
              </li>
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default Task2;
