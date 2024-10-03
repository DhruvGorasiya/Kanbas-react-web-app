import ModulesControls from "./ModulesControls";

export default function Modules() {
  return (
    <div>
      <button>Collapse All</button>
      <button>View Progress</button>
      <select id="wd-role">
        <option value="USER">Publish All</option>
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
      <button>+ Module</button>

      <div>
        <ModulesControls />
        <br />
        <br />
        <br />
        <br />
        <ul id="wd-modules" className="list-group rounded-0">
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary"> Week 1 </div>
            <ul className="wd-lessons list-group rounded-0">
              <li className="wd-lesson list-group-item p-3 ps-1">
                LEARNING OBJECTIVES{" "}
              </li>
              <li className="wd-lesson list-group-item p-3 ps-1">
                Introduction to the course{" "}
              </li>
              <li className="wd-lesson list-group-item p-3 ps-1">
                Learn what is Web Development{" "}
              </li>
              <li className="wd-lesson list-group-item p-3 ps-1"> LESSON 1 </li>
              <li className="wd-lesson list-group-item p-3 ps-1"> LESSON 2 </li>
            </ul>
          </li>
          

          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary"> Week 2 </div>
            <ul className="wd-lessons list-group rounded-0">
              <li className="wd-lesson list-group-item p-3 ps-1">
                LEARNING OBJECTIVES{" "}
              </li>
              <li className="wd-lesson list-group-item p-3 ps-1">
                Learn how to create user interfaces with HTML{" "}
              </li>
              <li className="wd-lesson list-group-item p-3 ps-1">
                Deploy the assignment to Netlify{" "}
              </li>
              <li className="wd-lesson list-group-item p-3 ps-1">
                {" "}
                Formatting Web content with Heading{" "}
              </li>
              <li className="wd-lesson list-group-item p-3 ps-1">
                {" "}
                Formatting contenet with Lists and Tables{" "}
              </li>
              <li className="wd-lesson list-group-item p-3 ps-1"> LESSON 1 </li>
              <li className="wd-lesson list-group-item p-3 ps-1"> LESSON 2 </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );


  // return (
  //   <div>
  // <ModulesControls /><br /><br /><br /><br />
  // <ul id="wd-modules" className="list-group rounded-0">
  //   <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
  //     <div className="wd-title p-3 ps-2 bg-secondary"> Week 1 </div>
  //     <ul className="wd-lessons list-group rounded-0">
  //       <li className="wd-lesson list-group-item p-3 ps-1">
  //         LEARNING OBJECTIVES </li>
  //       <li className="wd-lesson list-group-item p-3 ps-1">
  //         Introduction to the course </li>
  //       <li className="wd-lesson list-group-item p-3 ps-1">
  //         Learn what is Web Development </li>
  //       <li className="wd-lesson list-group-item p-3 ps-1"> LESSON 1 </li>
  //       <li className="wd-lesson list-group-item p-3 ps-1"> LESSON 2 </li>
  //     </ul>
  //   </li>
  //   <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
  //     <div className="wd-title p-3 ps-2 bg-secondary"> Week 2 </div>
  //     <ul className="wd-lessons list-group rounded-0">
  //       <li className="wd-lesson list-group-item p-3 ps-1">
  //         LEARNING OBJECTIVES </li>
  //       <li className="wd-lesson list-group-item p-3 ps-1"> LESSON 1 </li>
  //       <li className="wd-lesson list-group-item p-3 ps-1"> LESSON 2 </li>
  //     </ul>
  //   </li>
  // </ul> </div>

  // );
}
