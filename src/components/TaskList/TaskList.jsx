import React from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const TaskList = ({ data, updateTaskStatus }) => {
  return (
    <div id='tasklist' className='h-[55%] flex items-center justify-start gap-5 flex-nowrap w-full overflow-x-auto py-5 rounded-xl mt-10'>
      {data.tasks.map((elem, idx) => {
        if (elem.active) {
          return <AcceptTask key={idx} data={elem} taskIndex={idx} updateTaskStatus={updateTaskStatus} />;
        }
        if (elem.newTask) {
          return <NewTask key={idx} data={elem} taskIndex={idx} updateTaskStatus={updateTaskStatus} />;
        }
        if (elem.completed) {
          return <CompleteTask key={idx} data={elem} />;
        }
        if (elem.failed) {
          return <FailedTask key={idx} data={elem} />;
        }
        return null;
      })}
    </div>
  );
};

export default TaskList;
