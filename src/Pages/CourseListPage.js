import React, { Component } from 'react';

import AddNewCourse from '../Components/AddNewCourse';
import CourseList from '../Components/CourseList';

class CourseListPage extends Component {
    render() {
        return (
            <div>
                <AddNewCourse/>
                <CourseList />
            </div>
        );
    }
}

export default CourseListPage;