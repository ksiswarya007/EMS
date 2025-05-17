import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { setLocalStorage } from '../../utils/localStorage';

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [category, setCategory] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    const newTaskObj = {
      title,
      description,
      date,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false
    };

    const updatedUsers = userData.map((user) => {
      if (user.id.toString() === assignTo) {
        return {
          ...user,
          tasks: [...user.tasks, newTaskObj],
          taskCounts: {
            ...user.taskCounts,
            newTask: user.taskCounts.newTask + 1
          }
        };
      }
      return user;
    });


    setUserData(updatedUsers);
    localStorage.setItem('employees', JSON.stringify(updatedUsers)); 

    setTitle('');
    setDescription('');
    setDate('');
    setAssignTo('');
    setCategory('');
  };

  return (
    <div className="mt-10 px-4 flex justify-center">
      <form
        onSubmit={submitHandler}
        className="w-full max-w-5xl bg-gray-800 flex flex-col md:flex-row gap-6 p-6 rounded-xl shadow-lg"
      >
        <div className="w-full md:w-1/2 space-y-4">
          <div>
            <h3 className="text-base font-medium mb-1">Task Title</h3>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Make a UI design"
              className="w-full px-3 py-2 rounded-lg bg-gray-700 border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <h3 className="text-base font-medium mb-1">Date</h3>
            <input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
              className="w-full px-3 py-2 rounded-lg bg-gray-700 border border-gray-600 text-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <h3 className="text-base font-medium mb-1">Assign to</h3>
            <select
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-gray-700 border border-gray-600 text-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="">Select employee</option>
              {userData.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.firstName}
                </option>
              ))}
            </select>
          </div>

          <div>
            <h3 className="text-base font-medium mb-1">Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              placeholder="design, dev, etc"
              className="w-full px-3 py-2 rounded-lg bg-gray-700 border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-between">
          <div>
            <h3 className="text-base font-medium mb-2">Description</h3>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="10"
              className="w-full px-3 py-2 rounded-lg bg-gray-700 border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
              placeholder="Enter task description here..."
            ></textarea>
          </div>

          <div className="mt-4 text-right">
            <button
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-base font-medium px-5 py-2 rounded-lg transition duration-200"
            >
              Create Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
