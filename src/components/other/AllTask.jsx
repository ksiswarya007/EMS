import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const markAsCompleted = (userId, taskIndex) => {
    const updatedUsers = userData.map(user => {
      if (user.id === userId) {
        const updatedTasks = [...user.tasks];
        const task = { ...updatedTasks[taskIndex] };

        if (!task.completed) {
          // Reset all statuses
          task.completed = true;
          task.active = false;
          task.newTask = false;
          task.failed = false;

          updatedTasks[taskIndex] = task;

          // Recalculate counts
          const updatedCounts = { newTask: 0, active: 0, completed: 0, failed: 0 };
          updatedTasks.forEach(t => {
            if (t.newTask) updatedCounts.newTask++;
            if (t.active) updatedCounts.active++;
            if (t.completed) updatedCounts.completed++;
            if (t.failed) updatedCounts.failed++;
          });

          return { ...user, tasks: updatedTasks, taskCounts: updatedCounts };
        }
      }
      return user;
    });

    setUserData(updatedUsers);
  };

  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-5'>
      <h2 className='text-white mb-4 text-xl font-semibold'>All Tasks</h2>
      {userData.map(user => (
        <div key={user.id} className="mb-6">
          <h3 className='text-white mb-2 font-bold'>{user.firstName}'s Tasks:</h3>
          {user.tasks.map((task, index) => (
            <div
              key={index}
              className={`p-3 rounded mb-2 ${
                task.completed ? 'bg-green-600' : 'bg-gray-700'
              } flex justify-between items-center`}
            >
              <div>
                <h4 className='text-white font-semibold'>{task.title}</h4>
                <p className='text-gray-300'>{task.description}</p>
                <p className='text-gray-400 text-sm'>Category: {task.category}</p>
              </div>

              {!task.completed && (
                <button
                  onClick={() => markAsCompleted(user.id, index)}
                  className='bg-emerald-500 hover:bg-emerald-700 text-white px-3 py-1 rounded'
                >
                  Mark as Completed
                </button>
              )}

              {task.completed && (
                <span className='text-green-300 font-semibold'>Completed</span>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default AllTask;
