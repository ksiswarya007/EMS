import React, { useContext } from 'react';
import Header from '../other/Header';
import TaskListNumbers from '../other/TaskListNumbers';
import TaskList from '../TaskList/TaskList';
import { AuthContext } from '../../context/AuthProvider';

const EmployeeDashboard = ({ data, changeUser }) => {
  const [userData, setUserData] = useContext(AuthContext);

  // Find fresh user data from context by ID
  const currentUser = userData.find(user => user.id === data.id) || data;

  const updateTaskStatus = (taskIndex, newStatus) => {
    const updatedUsers = userData.map(user => {
      if (user.id === data.id) {
        const updatedTasks = [...user.tasks];
        const task = { ...updatedTasks[taskIndex] };

        // Reset all statuses
        task.active = false;
        task.newTask = false;
        task.completed = false;
        task.failed = false;

        // Set new status
        if (newStatus === 'completed') task.completed = true;
        else if (newStatus === 'failed') task.failed = true;
        else if (newStatus === 'active') task.active = true;
        else if (newStatus === 'newTask') task.newTask = true;

        updatedTasks[taskIndex] = task;

        // Update counts
        const counts = { newTask: 0, active: 0, completed: 0, failed: 0 };
        updatedTasks.forEach(t => {
          if (t.newTask) counts.newTask++;
          if (t.active) counts.active++;
          if (t.completed) counts.completed++;
          if (t.failed) counts.failed++;
        });

        return {
          ...user,
          tasks: updatedTasks,
          taskCounts: counts,
        };
      }
      return user;
    });

    setUserData(updatedUsers);
  };

  return (
    <div className='p-10 bg-[#1c1c1cc] h-screen'>
      <Header changeUser={changeUser} data={currentUser} />
      <TaskListNumbers data={currentUser} />
      <TaskList data={currentUser} updateTaskStatus={updateTaskStatus} />
    </div>
  );
};

export default EmployeeDashboard;
