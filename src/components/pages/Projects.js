import React, { Component } from 'react'
import './Project.css'

export default class Projects extends Component {
  render() {
    return (
      <div style={style}>
        <ul>
          <li><a className='ProjectLink' href='https://github.com/TimLucca'>GitHub</a></li>
          <li><a className='ProjectLink' href='https://timlucca.dev/todolist/'>ToDo List</a></li>
        </ul>
      </div>
    )
  }
}

const style = {
  color: '#fff',
  padding: '1rem',
  background: '#282c34'
}