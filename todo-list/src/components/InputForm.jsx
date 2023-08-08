import React, { useEffect, useState } from 'react';

const InputForm = ({ taskArr, setTaskArr }) => {
    const [currTask, setCurrTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        let task = {
            id: new Date().getUTCMilliseconds(),
            name: currTask,
            completed: false,
            editing: false,
        };

        setTaskArr([...taskArr, task]);
        console.log(task);
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
            />
            <button type='submit' onClick={handleSubmit}>
                Add Task
            </button>
        </form>
    );
};

export default InputForm;
