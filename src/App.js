import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import store from './store/store';
import MainPage from './pages/MainPage/MainPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';

import './App.css';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<MainPage />} />
                    <Route path='/profile/:profileId' element={<ProfilePage />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
