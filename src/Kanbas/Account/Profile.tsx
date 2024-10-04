import { Link } from "react-router-dom";
export default function Profile() {
  return (
    // <div id="wd-profile-screen">
    //   <h3>Profile</h3>
    //   <input id="wd-username" value="alice" placeholder="username" /><br/>
    //   <input id="wd-password" value="123" placeholder="password"
    //          type="password" /><br/>
    //   <input id="wd-firstname" value="Alice" placeholder="First Name" /><br/>
    //   <input id="wd-lastname" value="Wonderland" placeholder="Last Name" /><br/>
    //   <input id="wd-dob" value="2000-01-01" type="date" /><br/>
    //   <input id="wd-email" value="alice@wonderland" type="email" /><br/>
    //   <select id="wd-role">
    //     <option value="USER">User</option>
    //     <option value="ADMIN">Admin</option>
    //     <option value="FACULTY">Faculty</option>
    //     <option value="STUDENT">Student</option>
    //   </select><br/>
    //   <Link to="/Kanbas/Account/Signin" >Sign out</Link>
    // </div>


    <div className="container mt-5">
    <h1>Profile</h1>
    <div className="mb-3">
      <input type="text" className="form-control" placeholder="Username" value="Dhruv" readOnly/>
    </div>
    <div className="mb-3">
      <input type="text" className="form-control" placeholder="ID" value="123" readOnly/>
    </div>
    <div className="mb-3">
      <input type="text" className="form-control" placeholder="First Name" value="Dhruv" readOnly/>
    </div>
    <div className="mb-3">
      <input type="text" className="form-control" placeholder="Gorasiya" value="temp" readOnly/>
    </div>
    <div className="mb-3">
      <input type="date" className="form-control" placeholder="mm/dd/yyyy"/>
    </div>
    <div className="mb-3">
      <input type="email" className="form-control" placeholder="Email" value="dhruv@temp.com" readOnly/>
    </div>
    <div className="mb-3">
      <input type="text" className="form-control" placeholder="Role" value="User" readOnly/>
    </div>

    <Link to="/Kanbas/Account/Signin" className="btn btn-danger w-100">
        Signout
      </Link>

  </div>
);}
