import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import './Courses.css';
import Course from '../../../components/Course/Course';

class Courses extends Component{
    state={
        courses:[
            {id: 1, title: 'Js courses'},
            {id: 2, title: 'Css courses'},
            {id: 3, title: 'HTML courses'},
            {id: 4, title: 'REACT-JS courses'}
        ]
    }

    render(){
        return (
            <div>
                <h1 style={{textAlign: 'center'}}>Courses page</h1>
                <section className="Courses">
                    {
                        this.state.courses.map(course => (
                            <Link
                                key={course.id}
                                to={{
                                    pathname: this.props.match.url + '/' + course.id,
                                    search: '?title=' + course.title
                                }}
                            >
                                <div className="Course">{course.title}</div>
                            </Link>

                        ))
                    }
                </section>
                <Route path={this.props.match.url + '/:id'} component={Course}/>
            </div>
        )
    }
}

export default Courses;