import React from 'react';

const Header = (props) => {
  const { data, changeUser } = props;

  const logOutUser = () => {
    localStorage.removeItem('loggedInUser'); // Better than setting it to ''
    changeUser(null); // Properly reset user state
  };

  const userName = data?.firstName || 'Admin';

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>
        Hello<br />
        <span className='text-3xl font-semibold'>{userName} 👋</span>
      </h1>
      <button
        onClick={logOutUser}
        className='bg-red-600 text-white text-sm font-medium px-3 py-1 rounded-md'
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
