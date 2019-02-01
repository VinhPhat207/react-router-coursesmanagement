import React, { Component } from 'react';
import CourseItem from './CourseItem';

// API
import callAPI from '../Utils/callAPI'

/*
    this.setState  khong bao gio de trong render
*/

class CourseList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            courses: []
        }
    }

    componentDidMount() {
        callAPI('GET', '/api/courses', null).then(res => {
            this.setState({
                courses: res.data
            })
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        let { courses } = this.state;

        let elmCourseItem = courses.map((course, index) => {
            return (
                <CourseItem
                    key={index}
                    index={index}
                    course={course}
                />
            )
        })
        return (
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th>STT</th>
                        <th>Tên khóa học</th>
                        <th>Giá</th>
                        <th>Giảng viên</th>
                        <th>Trạng thái</th>
                        <th>Xử lý</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        elmCourseItem
                    }
                </tbody>
            </table>
        );
    }
}

export default CourseList;