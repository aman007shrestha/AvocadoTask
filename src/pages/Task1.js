import React, { useState } from 'react';
import Form from '../components/Form/Form';
import Table from '../components/Table/Table';

const Task1 = () => {
  const [tableData, setTableData] = useState([]);
  console.log(tableData);
  return (
    <>
      <Form setTableData={setTableData} />
      <Table tableData={tableData} setTableData={setTableData} />
    </>
  );
};

export default Task1;
