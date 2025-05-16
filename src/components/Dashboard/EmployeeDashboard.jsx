import React from 'react';
import Header from '../other/Header';
import TaskListNumbers from '../other/TaskListNumbers';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = ({ data, changeUser }) => {
  return (
    <>
      <div className='p-10 bg-[#1c1c1cc] h-screen'>
        <Header changeUser={changeUser} data={data} />
        <TaskListNumbers data={data} />
        <TaskList data={data} />
      </div>
    </>
  );
};

export default EmployeeDashboard;
