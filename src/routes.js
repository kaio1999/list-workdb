import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home';
import UserListPage from './pages/UserList';
import Header from './components/GlobalComponents/header';

function RoutesConfig() {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Montserrat&display=swap" rel="stylesheet" />
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                </Routes>
                <Routes>
                    <Route path='/userlist' element={<UserListPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default RoutesConfig