import React, { Component } from 'react';

// API
//import callAPI from '../Utils/callAPI'
import axios from 'axios';

class ActionPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            price: 0,
            lecturer: '',
            available: false
        }
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    onSubmit = (event) => {
        event.preventDefault();

        let { name, price, lecturer, available } = this.state;

        // callAPI('POST', '/api/courses', { name, price, lecturer, available }).then(res => {
        //     console.log(res.data);
        // }).catch(err => {
        //     console.log(err);
        // });

        axios({
            method: 'post',
            url: 'https://api-courses.herokuapp.com/api/courses',
            data: { name, price, lecturer, available }
        }).then(res => {
            console.log(res);
            
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
        let { name, price, lecturer, available } = this.state;

        return (
            <div className="container">
                <form
                    //action="/action_page.php"
                    onSubmit={this.onSubmit}
                >
                    <div className="row">

                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Tên khóa học:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    onChange={this.onChange}
                                    value={name}
                                />
                            </div>

                            <div className="form-group">
                                <label>Giá:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="price"
                                    onChange={this.onChange}
                                    value={price}
                                />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Giảng viên:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="lecturer"
                                    onChange={this.onChange}
                                    value={lecturer}
                                />
                            </div>

                            <div className="form-group">
                                <label>Trạng thái:</label>
                                <select
                                    className="form-control"
                                    name="available"
                                    onChange={this.onChange}
                                    value={available}
                                >
                                    <option value={false}>Chưa có</option>
                                    <option value={true}>Đang mở</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary"
                    >
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default ActionPage;