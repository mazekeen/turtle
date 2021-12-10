import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts/Raleway/static/Raleway-Regular.ttf';

import App from './components/App';
import { AppProvider } from './components/Context';

<script type="text/javascript" src="canvasjs.min.js"></script>

ReactDOM.render(
    <React.StrictMode>
        <AppProvider>
            <App />
        </AppProvider>
    </React.StrictMode>,
    document.getElementById('root')
);



