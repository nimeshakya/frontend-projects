import React, { useEffect, useState } from 'react';

const InputForm = ({
    taskArr,
    setTaskArr,
    setActionTaken,
    setAlertMsg,
    currTask,
    setCurrTask,
    isEditingTask,
    setIsEditingTask,
}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditingTask) {
            if (currTask === '') {
                setActionTaken(true);
                setAlertMsg('No task edited!');
            } else {
                taskArr = taskArr.filter((taskItem) => {
                    if (taskItem.editing) {
                        taskItem.name = currTask;
                        taskItem.editing = false;
                    }
                });
                setCurrTask('');
                setIsEditingTask(false);
                setActionTaken(true);
                setAlertMsg('Task Edited!');
            }
        } else {
            if (currTask === '') {
                setActionTaken(true);
                setAlertMsg('No task added!');
            } else {
                let task = {
                    id: new Date().getUTCMilliseconds(),
                    name: currTask,
                    completed: false,
                    editing: false,
                };

                setTaskArr([...taskArr, task]);
                setCurrTask('');
                setActionTaken(true);
                setAlertMsg('Task Added!');
            }
        }
    };

    return (
        <form>
            <label htmlFor='taskname'>Task Name: </label>
            <input
                type='text'
                name='taskname'
                id='taskname'
                placeholder='Get groceries, wash dishes, finish assignment, etc.'
                value={currTask}
                onChange={(e) => setCurrTask(e.target.value)}
                required
            />
            <button type='submit' onClick={handleSubmit} title='add task'>
                {isEditingTask ? 'Edit' : 'Add Task'}
            </button>
        </form>
    );
};

export default InputForm;
