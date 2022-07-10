import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import CreateUser from './components/CreateUser';
import EditUser from "./components/EditUser";
import Profile from "./components/Profile";
import Account  from './components/Account';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

function App() {

  let data = {
    monthly: 40000,
    yearly: 480000,
    task: 100,
    pending: 10
  }

  return <>
    <div id="wrapper">
      <BrowserRouter>
        <Sidebar />

        <div id="content-wrapper" className="d-flex flex-column">

          {/* <!-- Main Content --> */}
          <div id="content">
            <Routes>
              <Route path="/dashboard" element={<Dashboard data={data} />} >
              <Route path="profile" element={<Profile/>}/>
              <Route path="account" element={<Account/>}/>
              </Route>
              <Route path="/add-user" element={<CreateUser />} />
              <Route path="/edit-user/:id" element={<EditUser />} />
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
      </BrowserRouter>
    </div>
  </>
}

export default App;