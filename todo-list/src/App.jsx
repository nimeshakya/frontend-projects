import React, { useState } from 'react';

import InputForm from './components/InputForm';
import Task from './components/Task';

const tasks = [
    {
        id: 0,
        name: 'get groceries',
        completed: false,
        editing: false,
    },
    {
        id: 1,
        name: 'cook dinner',
        completed: false,
        editing: false,
    },
    {
        id: 2,
        name: 'finish assignments',
        completed: false,
        editing: false,
    },
];

const App = () => {
    const [taskArr, setTaskArr] = useState(tasks);
    return (
        <main>
            <div className='app-container'>
                <InputForm taskArr={taskArr} setTaskArr={setTaskArr} />
                <h1>Tasks</h1>
                <ul>
                    {taskArr.map((task, index) => {
                        return (
                            <Task
                                key={index}
                                task={task}
                                taskArr={taskArr}
                                setTaskArr={setTaskArr}
                            />
                        );
                    })}
                </ul>
            </div>
        </main>
    );
};

export default App;
