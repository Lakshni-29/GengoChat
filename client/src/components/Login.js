import React, { useRef } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { v4 as uuidV4 } from 'uuid'
import logo from './logo.png'
import './Login.css'

export default function Login({ onIdSubmit }) {
  const idRef = useRef()

  function handleSubmit(e) {
    e.preventDefault()

    onIdSubmit(idRef.current.value)
  }

  function createNewId() {
    onIdSubmit(uuidV4())
  }

  return (
    <><div className="login">
      <h2 className='signin'>Sign in</h2>
      <p className='tag'>Are you one among us?</p>
      <Form onSubmit={handleSubmit} className="w-100">
        <Form.Group>
          <Form.Label className='id'></Form.Label>
          <Form.Control type="text" ref={idRef} placeholder="Enter Id" style={{width:'120px'}} className='textplace' required />
        </Form.Group>
        <Button variant="primary" type="submit" className="mr-2">Login</Button>
        <Button variant="outline-primary" onClick={createNewId} className="sec">Create Id</Button>{' '}
      </Form>
    </div>
    <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-right">
            <img src={logo} style={{width:'250px',position:'relative',top:'-100px'}}></img>
          <h1><span className='change'>{' '},Mate!</span></h1>
            <p className='para'>Enter your Id and break the language barrier between people!</p>
            
          </div>
        </div>
      </div></>
  )
}
