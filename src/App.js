import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import StudentForm from './components/StudentForm';
import ErrorBoundary from './components/ErrorBoundary';
import JSTeachers from './JSTeachers';
import Teacher from './Teacher';
class App extends Component {

  state = {
    teacher: ''
  };

  updateTeacher = teacher => {
    const newTeacher = teacher;
    this.setState(state => {
      if (state.teacher === newTeacher) {
        return null;
      } else {
        return { teacher };
      }
    });
  }
  
  render() {
    const teachers = ['jay', 'vivianne', 'ecma', 'json'];

    return (
      <div className="App">
      <header>
          <h1>Meet the Teachers</h1>
          {teachers.map((teacher,i) =>
            <button
              key={teacher}
              type="button"
              value={teacher}
              onClick={e => this.updateTeacher(e.target.value)}
            >{teacher}
            </button>)}
        </header>

        <Teacher teacher={this.state.teacher} />

        <ErrorBoundary>
          <StudentForm />
          <JSTeachers />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
