import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faPencilAlt, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

import LoginPage from '../../pages/LoginPage';
import RegisterPage from '../../pages/RegisterPage';
import HomePage from '../../pages/HomePage';

library.add(fab, faPlus);
library.add(fab, faTrash);
library.add(fab, faPencilAlt);

function App() {
    return (
        <Router>
            <Route path="/login">
                <LoginPage />
            </Route>

            <Route path="/register">
                <RegisterPage />
            </Route>

            <Route path="/" exact>
                <HomePage />
            </Route>
        </Router>
    );
}

export default App;
