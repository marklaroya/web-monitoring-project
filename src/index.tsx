import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './pages/index';
import './styles/global.css';

const App: React.FC = () => {
    return (
        <div>
            <HomePage />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));