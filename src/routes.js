import React from 'react'
import HomePage from './Pages/HomePage';
import CourseListPage from './Pages/CourseListPage';
import ActionPage from './Pages/ActionPage';
import NotFoundPage from './Pages/NotFoundPage';

const routes = [
    {
        path: '/',
        exact: true, 
        main: () => <HomePage/>
    },

    {
        path: '/course-list',
        exact: true, 
        main: () => <CourseListPage/>
    },

    {
        path: '/add-new-course',
        exact: true, 
        main: () => <ActionPage/>
    },

    {
        path: '/edit-course/:id',
        exact: true, 
        main: () => <ActionPage />
    },

    {
        path: '/',
        exact: false, 
        main: () => <NotFoundPage/>
    },    
]

export default routes;