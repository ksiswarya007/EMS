import React from 'react';
import Header from '../other/Header';
import CreateTask from '../other/CreateTask';
import AllTask from '../other/AllTask';

const AdminDashboard = (props) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-8">
      <Header changeUser={props.changeUser}/>
      <CreateTask/>
      <AllTask/>
    </div>
  );
};

export default AdminDashboard;
