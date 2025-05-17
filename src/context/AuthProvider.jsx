import React, { useState, createContext, useEffect } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    setLocalStorage(); // populate localStorage if empty
    const { employees } = getLocalStorage();
    setUserData(employees);
  }, []);

  // Sync to localStorage whenever userData changes
  useEffect(() => {
    if (userData.length > 0) {
      localStorage.setItem('employees', JSON.stringify(userData));
    }
  }, [userData]);

  return (
    <AuthContext.Provider value={[userData, setUserData]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
