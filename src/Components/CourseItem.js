import React, { Component } from 'react';

class CourseItem extends Component {
    render() {        
        let { index, course } = this.props;

        return (
            <tr>
                <td>{index + 1}</td>
                <td>{course.name}</td>
                <td>{course.price} VNĐ</td>
                <td>{course.lecturer}</td>
                <td
                    className={course.available ? "text-info" : "text-danger"}
                >
                    {course.available ? "Đang mở" : "Chưa có"}
                </td>
                <td>
                    <button type="button" className="btn btn-warning">Sửa</button>
                    <button type="button" className="btn btn-danger ml-2">Xóa</button>
                </td>
            </tr>
        );
    }
}

export default CourseItem;