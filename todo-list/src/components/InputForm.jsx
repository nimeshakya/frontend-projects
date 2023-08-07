import React from 'react';

const InputForm = () => {
    return (
        <form>
            <label htmlFor='taskname'>Task Name: </label>
            <input
                type='text'
                name='taskname'
                id='taskname'
                placeholder='Get groceries, wash dishes, finish assignment, etc.'
            />
            <button type='submit'>Add Task</button>
        </form>
    );
};

export default InputForm;
