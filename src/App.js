import './App.css';
import { useState, React, createContext } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import CreateUser from './components/CreateUser';
import EditUser from "./components/EditUser";
import Profile from "./components/Profile";
import Account from './components/Account';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

export const UserContext = createContext()
function App() {

  let data = {
    monthly: 40000,
    yearly: 480000,
    task: 100,
    pending: 10
  }
  let [user, setUser] = useState([
    {
      firstName: "vinod",
      lastName: "kotagiri",
      email: "vinodkotagiri@icloud.com  ",
      phone: "9885718717",
      dob: "01-01-1990",
      location: "Hyderabad"
    },
    {
      firstName: "Neha",
      lastName: "Hussain",
      email: "nehahussain@icloud.com  ",
      phone: "9155785486",
      dob: "01-02-1990",
      location: "Hyderabad"
    },
    {
      firstName: "Srikanth",
      lastName: "Kureshi",
      email: "srikanthquerashi@gmail.com  ",
      phone: "8245678964",
      dob: "12-12-1984",
      location: "Banglore"
    },
    {
      firstName: "Abraham",
      lastName: "Lincoln",
      email: "Ablincoln@icloud.com  ",
      phone: "7485748691",
      dob: "01-02-1968",
      location: "Chennai"
    },
    {
      firstName: "Rahul",
      lastName: "Gandhi",
      email: "rghandi@icloud.com  ",
      phone: "1245789684",
      dob: "01-02-1958",
      location: "Delhi"
    }
  ])
  return <>
    <div id="wrapper">
      <BrowserRouter>
        <UserContext.Provider value={{ user, setUser }}>
          <Sidebar />

          <div id="content-wrapper" className="d-flex flex-column">

            {/* <!-- Main Content --> */}
            <div id="content">
              <Routes>
                <Route path="/dashboard" element={<Dashboard data={data} />} >
                  <Route path="profile" element={<Profile />} />
                  <Route path="account" element={<Account />} />
                </Route>
                <Route path="/add-user" element={<CreateUser />} />
                <Route path="/edit-user/:id" element={<EditUser data={{ user, setUser }} />} />
                <Route path="*" element={<Navigate to="/dashboard" />} />
              </Routes>

            </div>

            {/* <!-- Footer -->/ */}
            <footer className="sticky-footer bg-white">
              <div className="container my-auto">
                <div className="copyright text-center my-auto">
                  <span>Copyright &copy; Your Website 2021</span>
                </div>
              </div>
            </footer>
            {/* <!-- End of Footer --> */}

          </div>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  </>
}

export default App;