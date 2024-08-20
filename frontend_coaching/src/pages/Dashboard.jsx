import React, { useState } from 'react';
import Coach from './Coach';
import Student from './Student';

function DashBoard() {
    const [activeComponent, setActiveComponent] = useState('coach');

    const renderComponent = () => {
        switch (activeComponent) {
            case 'coach':
                return <Coach />;
            case 'student':
                return <Student />;
            default:
                return <Coach />;
        }
    };

    return (
        <div className="flex min-h-screen">
            <div className="w-1/4 bg-gray-800 text-white p-4 flex flex-col">
                <p className="text-2xl font-bold mb-4 text-center">Scheduler</p>
                <button
                    className={`mb-2 px-4 py-2 rounded-lg transition-colors duration-300 ${activeComponent === 'coach' ? 'bg-red-600' : 'bg-yellow-700 hover:bg-gray-600'}`}
                    onClick={() => setActiveComponent('coach')}
                >
                    Coach
                </button>
                <button
                    className={`mb-2 px-4 py-2 rounded-lg transition-colors duration-300 ${activeComponent === 'student' ? 'bg-red-600' : 'bg-yellow-700 hover:bg-gray-600'}`}
                    onClick={() => setActiveComponent('student')}
                >
                    Student
                </button>
            </div>
            <div className="w-3/4 p-6 ">
                {renderComponent()}
            </div>
        </div>
    );
}

export default DashBoard;
