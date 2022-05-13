import React from 'react';

const Table = ({ tableData }) => {
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
            <td>{data.image.name}</td>
          </tr>
        );
      })}
    </table>
  );
};

export default Table;
