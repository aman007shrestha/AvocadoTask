import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { toast } from 'react-toastify';

const Table = ({ tableData, setTableData }) => {
  const removeItem = (id) => {
    const newPosts = tableData.filter((post) => post._id !== id);

    setTableData(newPosts);
    toast.success('delete successfull');
  };
  return (
    <table className='table'>
      <tr>
        <th>Layout</th>
        <th>Name</th>
        <th>Capacity</th>
        <th>Status</th>
        <th>Image</th>
      </tr>
      {tableData.map((data) => {
        return (
          <tr key={data._id}>
            <td>{data.layout}</td>
            <td>{data.name}</td>
            <td>{data.capacity}</td>
            <td>{data.status ? 'True' : 'False'}</td>
            <td className='imageDel'>
              <div>{data.image.name}</div>
              <div className='delButton' onClick={() => removeItem(data._id)}>
                <AiOutlineDelete />
              </div>
            </td>
          </tr>
        );
      })}
    </table>
  );
};

export default Table;
