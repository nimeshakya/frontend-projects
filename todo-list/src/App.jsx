import React from 'react';

import InputForm from './components/InputForm';
import Task from './components/Task';

const App = () => {
    return (
        <main>
            <div className='app-container'>
                <InputForm />
                <h1>Tasks</h1>
                <ul>
                    <Task />
                    <Task />
                    <Task />
                </ul>
            </div>
        </main>
    );
};

export default App;
