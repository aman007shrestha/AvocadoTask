import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { toast } from 'react-toastify';
const Form = ({ setTableData }) => {
  const [data, setData] = useState({
    _id: '',
    layout: '',
    name: '',
    capacity: '',
    status: false,
    image: '',
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(
    //   `${data.layout} ${data.name} ${data.capacity} ${data.status} ${data.image.name}`
    // );
    console.log(data.image);
    data._id = uuid();
    setTableData((tableData) => [...tableData, data]);
    toast.success('successful', { autoClose: 3000 });
    setData({
      layout: '',
      name: '',
      capacity: '',
      status: false,
      image: '',
    });
  };
  const handleClear = (e) => {
    e.preventDefault();
    setData({
      layout: '',
      name: '',
      capacity: '',
      status: false,
      image: '',
    });
  };
  return (
    <article>
      <form action='' className='form'>
        <div className='form-control'>
          <label htmlFor='layout'>Layout : </label>
          <select
            id='layout'
            name='layout'
            value={data.layout}
            onChange={handleChange}
          >
            <option value='' disabled>
              Select Layout
            </option>
            <option value='LayoutA'>Layout A</option>
            <option value='LayoutB'>Layout B</option>
            <option value='LayoutC'>Layout C</option>
          </select>
        </div>
        <div className='form-control'>
          <label htmlFor='name'>Name : </label>
          <input
            type='text'
            name='name'
            className='inputField'
            id='name'
            placeholder='Enter Name'
            value={data.name}
            onChange={handleChange}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='capacity'>Capacity : </label>
          <input
            type='text'
            name='capacity'
            className='inputField'
            id='capacity'
            placeholder='Enter Number of capacity'
            value={data.capacity}
            onChange={handleChange}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='status'>Status : </label>
          <input
            type='checkbox'
            id='status'
            name='status'
            className='inputField'
            checked={data.status ? 'checked' : ''}
            onClick={() => setData({ ...data, status: !data.status })}
          />
        </div>

        <div className='form-control'>
          <label htmlFor='file'>Image : </label>
          <input
            type='file'
            id='file'
            name='file'
            onChange={(e) => setData({ ...data, image: e.target.files[0] })}
          ></input>
        </div>
        <div className='btnWrapper'>
          <button
            type='submit'
            style={{ backgroundColor: '#1a1946' }}
            onClick={handleSubmit}
          >
            Create Table
          </button>
          <button
            type='submit'
            style={{ backgroundColor: '#ea3300' }}
            onClick={handleClear}
          >
            Cancel
          </button>
        </div>
      </form>
    </article>
  );
};

export default Form;
