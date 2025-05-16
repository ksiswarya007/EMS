import React,{useContext} from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
  const [userData,setUserData]=useContext(AuthContext);
  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-5 h-48'>

      <div className='bg-red-500 mb-2 py-2 px-4 flex justify-between items-center text-white font-semibold rounded'>
        <h2 className='text-lg font-medium w-1/5 text-left'>Employee Name</h2>
        <h3 className='text-lg font-medium w-1/5 text-center'>New Task</h3>
        <h5 className='text-lg font-medium w-1/5 text-center'>Active Task</h5>
        <h5 className='text-lg font-medium w-1/5 text-center'>Completed</h5>
        <h5 className='text-lg font-medium w-1/5 text-center'>Failed</h5>
      </div>

      <div className='h-[80%] overflow-auto space-y-2 pr-1'>
        {userData.map(function(elem,idx){
        return <div key={idx} className='bg-emerald-600 py-2 px-4 flex justify-between items-center text-white rounded hover:bg-emerald-700 transition'>
        <h2 className='w-1/5 text-lg font-medium text-left '>{elem.firstName}</h2>
        <h3 className='w-1/5 text-lg font-medium text-center text-blue-200'>{elem.taskCounts.newTask}</h3>
        <h5 className='w-1/5 text-lg font-medium text-center text-yellow-300'>{elem.taskCounts.active}</h5>
        <h5 className='w-1/5 text-lg font-medium text-center text-green-200'>{elem.taskCounts.completed}</h5>
        <h5 className='w-1/5 text-lg font-medium text-center text-red-300'>{elem.taskCounts.failed}</h5>
      </div>
      })}
      </div>
    </div>
  )
}

export default AllTask;
