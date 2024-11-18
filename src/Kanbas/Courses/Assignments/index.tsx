import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { RiArrowDropDownFill } from "react-icons/ri";
import { MdAssignment } from "react-icons/md";
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { FaPlus, FaTrash } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import AssignmentControlButtons from "./AssignmentControlButtons";
import * as db from "../../Database";
import { useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Assignment } from "../../types";
import { deleteAssignment } from "./reducer";
import * as assignmentsClient from "./client";
import { useEffect, useState } from "react";

export default function Assignments() {
  const { cid } = useParams();
  const [assignments, setAssignments] = useState([]);

  const fetchAssignments = async () => {
    const a = await assignmentsClient.fetchAssignment(cid);
    setAssignments(a);
  }

  const deleteAssignment = async (assignId: any) => {
    await assignmentsClient.deleteAssignment(assignId);
    fetchAssignments();
  }

  useEffect(() => {
    fetchAssignments();
  }, []);

  // const dispatch = useDispatch();

  const navigate = useNavigate();
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
            onClick={() => navigate(`/Kanbas/Courses/${cid}/Assignments/Editor`)}

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

              {assignments.map((assignment: Assignment) => (
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
                    {assignment.availableDate} | <b>Due</b> {assignment.dueDate}{" "}
                    | {assignment.points} pts
                  </div>
                  <div style={{ flex: 0.5 }}>
                    <FaTrash className="text-danger me-2 mb-1"
                      onClick={() => { deleteAssignment(assignment._id) }} />
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
