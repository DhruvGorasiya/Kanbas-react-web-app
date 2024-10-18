import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { RiArrowDropDownFill } from "react-icons/ri";
import { MdAssignment } from "react-icons/md";
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { FaPlus } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import AssignmentControlButtons from "./AssignmentControlButtons";
import * as db from "../../Database";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments.filter(
    (assignment) => assignment.course === cid
  );
  return (
    <div id="wd-assignments">
      <div
        className="d-flex align-items-center justify-content-between"
        style={{ maxWidth: "100%" }}
      >
        <div className="input-group" style={{ maxWidth: "300px" }}>
          <span className="input-group-text bg-white border-end-0">
            <FaSearch className="text-muted" />
          </span>
          <input
            type="text"
            className="form-control border-start-0"
            placeholder="Search..."
            aria-label="Search"
          />
        </div>

        {/* Buttons */}
        <div id="wd-modules-controls" className="text-nowrap ms-3">
          <button
            id="wd-add-assignment-btn"
            className="btn btn-lg btn-danger me-2"
          >
            <FaPlus
              className="position-relative me-2"
              style={{ bottom: "1px" }}
            />
            Assignment
          </button>
          <button id="wd-add-group-btn" className="btn btn-lg btn-secondary">
            <FaPlus
              className="position-relative me-2"
              style={{ bottom: "1px" }}
            />
            Group
          </button>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />

      <div>
        <ul id="wd-modules" className="list-group rounded-0">
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              {" "}
              <BsGripVertical className="me-2 fs-3" />
              <RiArrowDropDownFill /> Assignments
              <AssignmentControlButtons />
            </div>
            <ul className="wd-lessons list-group rounded-0">
              {/* <li className="wd-lesson list-group-item d-flex p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                <MdOutlineAssignmentTurnedIn className="me-2 fs-3 text-success" />
                <div style={{ flex: 2 }}>
                <a
                   className="wd-assignment-link"
                   href="#/Kanbas/Courses/1234/Assignments/123"
                   style={{ textDecoration: 'none', color: 'inherit' }}
                 >
                    A1
                 </a>
                  <br />
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <b>Not available until</b> May 6 at 12:00am | <b>Due</b> may
                  13 at 11:59pm | 100 pts
                </div>
                <div style={{ flex: 0.5 }}>
                  <LessonControlButtons />
                </div>
              </li>

              <li className="wd-lesson list-group-item d-flex p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                <MdOutlineAssignmentTurnedIn className="me-2 fs-3 text-success" />
                <div style={{ flex: 2 }}>
                <a
                   className="wd-assignment-link"
                   href="#/Kanbas/Courses/1234/Assignments/123"
                   style={{ textDecoration: 'none', color: 'inherit' }}
                 >
                   A2 
                 </a>
                  <br />
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <b>Not available until</b> May 13 at 12:00am | <b>Due</b> may
                  20 at 11:59pm | 100 pts
                </div>
                <div style={{ flex: 0.5 }}>
                  <LessonControlButtons />
                </div>
              </li>

              <li className="wd-lesson list-group-item d-flex p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                <MdOutlineAssignmentTurnedIn className="me-2 fs-3 text-success" />
                <div style={{ flex: 2 }}>
                <a
                   className="wd-assignment-link"
                   href="#/Kanbas/Courses/1234/Assignments/123"
                   style={{ textDecoration: 'none', color: 'inherit' }}
                 >
                   A3 
                 </a>
                  <br />
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <b>Not available until</b> May 20 at 12:00am | <b>Due</b> may
                  27 at 11:59pm | 100 pts
                </div>
                <div style={{ flex: 0.5 }}>
                  <LessonControlButtons />
                </div>
              </li> */}

              {assignments.map((assignment) => (
                <li
                  key={assignment._id}
                  className="wd-lesson list-group-item d-flex p-3 ps-1"
                >
                  <BsGripVertical className="me-2 fs-3" />
                  <MdOutlineAssignmentTurnedIn className="me-2 fs-3 text-success" />
                  <div style={{ flex: 2 }}>
                    <Link
                      to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                      className="wd-assignment-link"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {assignment.title}
                    </Link>
                    <br />
                    <span className="text-danger">
                      {assignment.modules}
                    </span> | <b>Not available until</b>{" "}
                    {assignment.availableDate[0]} | <b>Due</b> {assignment.dueDate[0]}{" "}
                    | {assignment.points} pts
                  </div>
                  <div style={{ flex: 0.5 }}>
                    <LessonControlButtons />
                  </div>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

// {assignments.map((assignment) => (
//   <li
//     key={assignment._id}
//     className="wd-lesson list-group-item d-flex p-3 ps-1"
//   >
//     <BsGripVertical className="me-2 fs-3" />
//     <MdOutlineAssignmentTurnedIn className="me-2 fs-3 text-success" />
//     <div style={{ flex: 2 }}>
//       <Link
//         className="wd-assignment-link"
//         to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
//         style={{ textDecoration: "none", color: "inherit" }}
//       >
//         {assignment.title}
//       </Link>
//     </div>
//     <div style={{ flex: 0.5 }}>
//       <LessonControlButtons />
//     </div>
//   </li>
// ))}
