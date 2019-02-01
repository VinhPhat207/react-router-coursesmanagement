import React, { Component } from 'react';
import { Link } from 'react-router-dom' // su dung the Link => khong load lai trang

class AddNewCourse extends Component {
    render() {
        return (
            <div className="container text-left">
                <Link
                    type="button"
                    className="btn btn-primary my-3 text-left"
                    to="/add-new-course"
                >
                    Thêm khóa học
                </Link>
            </div>
        );
    }
}

export default AddNewCourse;