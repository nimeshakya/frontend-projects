import React, { useState, useEffect } from 'react';

import InputForm from './components/InputForm';
import Task from './components/Task';
import Alert from './components/Alert';

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
    const [currTask, setCurrTask] = useState('');
    const [taskArr, setTaskArr] = useState(tasks);
    const [actionTaken, setActionTaken] = useState(false);
    const [alertMsg, setAlertMsg] = useState('');
    const [isEditingTask, setIsEditingTask] = useState(false);
    const [editingTask, setEditingTask] = useState({});

    // alert disappear after 3 seconds
    useEffect(() => {
        const timeId = setTimeout(() => {
            setActionTaken(false);
        }, 3000);
        return () => {
            clearTimeout(timeId);
        };
    }, [actionTaken]);

    return (
        <main>
            <Alert
                actionTaken={actionTaken}
                alertMsg={alertMsg}
                setActionTaken={setActionTaken}
            />
            <div className='app-container'>
                <InputForm
                    taskArr={taskArr}
                    setTaskArr={setTaskArr}
                    setActionTaken={setActionTaken}
                    setAlertMsg={setAlertMsg}
                    currTask={currTask}
                    setCurrTask={setCurrTask}
                    isEditingTask={isEditingTask}
                    setIsEditingTask={setIsEditingTask}
                />
                <h1>Tasks</h1>
                <ul>
                    {taskArr.map((task, index) => {
                        return (
                            <Task
                                key={index}
                                task={task}
                                taskArr={taskArr}
                                setTaskArr={setTaskArr}
                                actionTaken={actionTaken}
                                setActionTaken={setActionTaken}
                                alertMsg={alertMsg}
                                setAlertMsg={setAlertMsg}
                                setCurrTask={setCurrTask}
                                isEditingTask={isEditingTask}
                                setIsEditingTask={setIsEditingTask}
                            />
                        );
                    })}
                </ul>
            </div>
        </main>
    );
};

export default App;
