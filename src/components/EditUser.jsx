import React, { useContext, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { UserContext } from '../App'
const EditUser = () => {
  const params = useParams()
  let context = useContext(UserContext)
  const [firstName, setFname] = useState(context.user[params.id].firstName)
  const [lastName, setLname] = useState(context.user[params.id].lastName)
  const [email, setEmail] = useState(context.user[params.id].email)
  const [phone, setPhone] = useState(context.user[params.id].phone)
  const [dob, setDob] = useState(context.user[params.id].dob)
  const [location, setLocation] = useState(context.user[params.id].location)

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
    const user = [...context.user]
    user.splice(params.id, 1, data)
    context.setUser(user)
    navigate('/dashboard')

  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter First Name" value={firstName} onChange={(e) => setFname(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Last Name" value={lastName} onChange={(e) => setLname(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="text" placeholder="Enter Mobile number" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>DOB</Form.Label>
        <Form.Control type="date" placeholder="select DOB" value={dob} onChange={(e) => setDob(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Location</Form.Label>
        <Form.Control type="text" placeholder="Enter Location" value={location} onChange={(e) => setLocation(e.target.value)} />
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

export default EditUser
