import React, { useContext } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { Outlet } from "react-router-dom"
import { Table, Button } from 'react-bootstrap'
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined'
import { UserContext } from '../App'
function Dashboard(props) {

    let navigate = useNavigate()
    let context = useContext(UserContext)

    const handleDelete = (i) => {
        let data = [...context.user]
        data.splice(i, 1)
        context.setUser(data)
    }
    return <>

        <div className="container-fluid">

            {/* <!-- Page Heading --> */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                <a href="#!" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
            </div>

            {/* <!-- Content Row --> */}
            <div className="row">

                {/* <!-- Earnings (Monthly) Card Example --> */}
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                        Earnings (Monthly)</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">${props.data.monthly}</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-calendar fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Earnings (Monthly) Card Example --> */}
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-success shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                        Earnings (Annual)</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">${props.data.yearly}</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Earnings (Monthly) Card Example --> */}
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-info shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Tasks
                                    </div>
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-auto">
                                            <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">{props.data.task}%</div>
                                        </div>
                                        <div className="col">
                                            <div className="progress progress-sm mr-2">
                                                <div className="progress-bar bg-info" role="progressbar"
                                                    style={{ "width": `${props.data.task}%` }} aria-valuenow={props.data.task} aria-valuemin="0"
                                                    aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Pending Requests Card Example --> */}
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-warning shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                        Pending Requests</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{props.data.pending}</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-comments fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Content Row --> */}
            <div>
                This is sub main page
                <h3>List Of Users</h3>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone </th>
                            <th>Date of Birth</th>
                            <th>Location</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            context.user.map((u, i) => {
                                return <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{u.firstName}</td>
                                    <td>{u.lastName}</td>
                                    <td>{u.email}</td>
                                    <td>{u.phone}</td>
                                    <td>{u.dob}</td>
                                    <td>{u.location}</td>
                                    <td>
                                        <Button variant="primary" className="m-2 px-5" onClick={() => navigate(`/edit-user/${i}`)}><ModeEditOutlineOutlinedIcon /></Button>
                                        <Button variant="danger" className="m-2 px-5" onClick={() => handleDelete(i)}><DeleteForeverOutlinedIcon /></Button>
                                    </td>
                                </tr>

                            })
                        }
                    </tbody>
                </Table>
                <nav>
                    <button><Link to="profile">Profile</Link></button>&nbsp;
                    <button><Link to="account">Account</Link></button>
                </nav>
                <Outlet />
            </div>

        </div >
    </>
}

export default Dashboard