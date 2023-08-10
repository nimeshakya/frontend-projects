import React, { useState, useEffect, useRef } from 'react';

import InputForm from './components/InputForm';
import Task from './components/Task';
import Alert from './components/Alert';

const tasks = JSON.parse(localStorage.getItem('taskArr'));

const App = () => {
    const [currTask, setCurrTask] = useState('');
    const [taskArr, setTaskArr] = useState(tasks);
    const [actionTaken, setActionTaken] = useState(false);
    const [alertMsg, setAlertMsg] = useState('');
    const [isEditingTask, setIsEditingTask] = useState(false);
    // ref task input field
    const taskInput = useRef(null);

    // alert disappear after 3 seconds
    useEffect(() => {
        localStorage.setItem('taskArr', JSON.stringify(taskArr));
        console.log(tasks);
        const timeId = setTimeout(() => {
            setActionTaken(false);
        }, 3000);
        return () => {
            clearTimeout(timeId);
        };
    }, [actionTaken, taskArr]);

    return (
        <main>
            <h1 className='app-title'>To Do's</h1>
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
                    taskInput={taskInput}
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
                                taskInput={taskInput}
                            />
                        );
                    })}
                </ul>
            </div>
            <Alert
                actionTaken={actionTaken}
                alertMsg={alertMsg}
                setActionTaken={setActionTaken}
            />
        </main>
    );
};

export default App;
