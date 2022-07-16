import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const CreateUser = (props) => {
  const [firstName, setFname] = useState('')
  const [lastName, setLname] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [dob, setDob] = useState('')
  const [location, setLocation] = useState('')

  const navigate = useNavigate()

  const submitHandler = () => {
    let data = {
      firstName,
      lastName,
      email,
      phone,
      dob,
      location
    }
    const user = [...props.user]
    user.push(data)
    props.setUser(user)
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter First Name" onChange={(e) => setFname(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Last Name" onChange={(e) => setLname(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="text" placeholder="Enter Mobile number" onChange={(e) => setPhone(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>DOB</Form.Label>
        <Form.Control type="date" placeholder="select DOB" onChange={(e) => setDob(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Location</Form.Label>
        <Form.Control type="text" placeholder="Enter Location" onChange={(e) => setLocation(e.target.value)} />
      </Form.Group>

      <Button variant="primary" onClick={() => {
        submitHandler()
        navigate('/dashboard')
      }}>
        Submit
      </Button>
    </Form>
  )
}

export default CreateUser
