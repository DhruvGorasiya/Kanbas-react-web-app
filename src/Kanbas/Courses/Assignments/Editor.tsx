import AssignmentControlButtons from "./AssignmentControlButtons";
import { IoCloseOutline } from "react-icons/io5";
import { useNavigate, useParams } from "react-router";
import * as db from "../../Database";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addAssignment, updateAssignment } from "./reducer";
import * as assignmentsClient from "./client";
export default function Editor() {
  const { cid, aid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [assignment, setAssignment] = useState({
    course: cid,
    title: "",
    description: "",
    points: "",
    dueDate: "",
    availableDate: "",
    untilDate: "",
    modules: "Multiple Modules",
  });

  const fetchAssignmentById = async () => {
    if (aid === "Editor") {
      return;
    }
    const assignment = await assignmentsClient.fetchAssignmentById(cid, aid);
    console.log("assignment:", assignment);
    setAssignment(assignment);
  };

  useEffect(() => {
    fetchAssignmentById();
  }, []);

  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser.role === "FACULTY" || currentUser.role === "ADMIN";

  const updateAssignment = async (assignment: any) => {
    const updatedAssignment = await assignmentsClient.updateAssignment(
      assignment
    );
    console.log("updatedAssignment:", updatedAssignment);
    setAssignment(updatedAssignment);
  };

  const createAssignment = async (courseId: any, assignment: any) => {
    console.log("Creating assignment:", assignment);
    
    const newAssignment = await assignmentsClient.createAssignment(
      courseId,
      assignment
    );
    setAssignment(newAssignment);
  };

  const handleEdit = () => {
    navigate(-1);
  };

  const handleSave = () => {
    console.log("Save button clicked");

    if (!assignment.title) {
      alert("Assignment title is required");
      return;
    }

    try {
      if (aid !== "Editor") {
        updateAssignment(assignment);
      } else {
        createAssignment(cid, assignment);
      }
      handleEdit();
    } catch (error) {
      alert("Error saving assignment. Please try again.");
    }
  };
  const handleCancel = () => {
    handleEdit();
  };

  return (
    <div id="wd-assignments-editor" className="ms-5 mt-3">
      <div className="row mb-3">
        <div className="col-sm-12">
          <label htmlFor="wd-name">
            <b>Assignment Name</b>
          </label>
          <input
            id="wd-name"
            className="form-control mt-2"
            value={assignment.title}
            onChange={(e) => {
              setAssignment({ ...assignment, title: e.target.value });
            }}
            disabled={!isFaculty}
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-12">
          <div
            id="wd-description-container"
            className="wd-assignment-editor-desc-container"
          >
            <textarea
              id="wd-description"
              className="form-control mt-2"
              cols={50}
              rows={15}
              value={assignment.description}
              onChange={(e) => {
                setAssignment({ ...assignment, description: e.target.value });
              }}
              disabled={!isFaculty}
            ></textarea>
          </div>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-sm-5">
          <label htmlFor="wd-points" className="col-form-label float-end">
            Points
          </label>
        </div>
        <div className="col-sm-7">
          <input
            id="wd-points"
            className="form-control"
            placeholder=""
            value={assignment.points}
            onChange={(e) => {
              setAssignment({ ...assignment, points: e.target.value });
            }}
            disabled={!isFaculty}
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-sm-5">
          <label htmlFor="wd-group" className="col-form-label float-end">
            Assignment Group
          </label>
        </div>
        <div className="col-sm-7">
          <select id="wd-group" className="form-select" disabled={!isFaculty}>
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="QUIZZES">QUIZZES</option>
            <option value="EXAMS">EXAMS</option>
            <option value="PROJECT">PROJECT</option>
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-sm-5">
          <label
            htmlFor="wd-display-grade-as"
            className="col-form-label float-end"
          >
            Display Grade as
          </label>
        </div>
        <div className="col-sm-7">
          <select
            id="wd-display-grade-as"
            className="form-select"
            disabled={!isFaculty}
          >
            <option value="GRADESp">Percentage</option>
            <option value="GRADESl">Letter Grade</option>
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-5">
          <label
            htmlFor="wd-submission-type"
            className="col-form-label float-end"
          >
            Submission Type
          </label>
        </div>
        <div className="col-md-7">
          <fieldset className="border p-2">
            <div>
              <select
                id="wd-submission-type"
                className="form-select"
                disabled={!isFaculty}
              >
                <option value="VAL1" selected>
                  Online
                </option>
                <option value="VAL1" selected>
                  Offline
                </option>
              </select>
            </div>
            <div className="mt-4">
              <span>
                <b>Online Entry Options</b>
              </span>
              <br />
              <br />
              <input id="wd-text-entry" type="checkbox" disabled={!isFaculty} />
              <label htmlFor="wd-text-entry" className="ms-1">
                Text Entry
              </label>
              <br />
              <br />
              <input
                id="wd-website-url"
                type="checkbox"
                disabled={!isFaculty}
              />
              <label htmlFor="wd-website-url" className="ms-1">
                Website URL
              </label>
              <br />
              <br />
              <input
                id="wd-media-recordings"
                type="checkbox"
                disabled={!isFaculty}
              />
              <label htmlFor="wd-media-recordings" className="ms-1">
                Media Recordings
              </label>
              <br />
              <br />
              <input
                id="wd-student-annotation"
                type="checkbox"
                disabled={!isFaculty}
              />
              <label htmlFor="wd-student-annotation" className="ms-1">
                Student Annotation
              </label>
              <br />
              <br />
              <input
                id="wd-file-upload"
                type="checkbox"
                disabled={!isFaculty}
              />
              <label htmlFor="wd-file-upload" className="ms-1">
                File Uploads
              </label>
            </div>
          </fieldset>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-5">
          <label htmlFor="wd-assign-to" className="col-form-label float-end">
            Assign
          </label>
        </div>
        <div className="col-sm-7">
          <fieldset className="border p-2">
            <div className="wd-assign-to-input-wrapper">
              <div className="wd-assign-to-input-content">
                Everyone <IoCloseOutline />
              </div>
              <label htmlFor="wd-assign-to" className="col-form-label">
                <b>Assign to</b>
              </label>
              <input
                id="wd-assign-to"
                className="form-control"
                placeholder=""
                disabled={!isFaculty}
              />
            </div>
            <label htmlFor="wd-due-date" className="col-form-label">
              Due
            </label>
            <input
              id="wd-due-date"
              className="form-control"
              type="datetime-local"
              value={assignment.dueDate}
              onChange={(e) => {
                setAssignment({ ...assignment, dueDate: e.target.value });
              }}
              disabled={!isFaculty}
            />
            <div className="d-flex">
              <div className="me-2">
                <label htmlFor="wd-available-from" className="col-form-label">
                  <b>Available from</b>
                </label>
                <input
                  id="wd-available-from"
                  className="form-control"
                  type="datetime-local"
                  style={{ width: "155px" }}
                  value={assignment.availableDate}
                  onChange={(e) => {
                    setAssignment({
                      ...assignment,
                      availableDate: e.target.value,
                    });
                  }}
                  disabled={!isFaculty}
                />
              </div>
              <div className="float-end">
                <label htmlFor="wd-available-until" className="col-form-label">
                  <b>Until</b>
                </label>
                <input
                  id="wd-available-until"
                  className="form-control"
                  type="datetime-local"
                  style={{ width: "155px" }}
                  value={assignment.untilDate}
                  onChange={(e) => {
                    setAssignment({ ...assignment, untilDate: e.target.value });
                  }}
                  disabled={!isFaculty}
                />
              </div>
            </div>
          </fieldset>
        </div>
      </div>
      <hr />
      {isFaculty && (
        <div className="row mt-4">
          <div className="col-12 d-flex justify-content-end">
            <button
              id="wd-cancel"
              className="btn btn-secondary me-1"
              onClick={() => {
                handleCancel();
              }}
            >
              Cancel
            </button>
            <button
              id="wd-save"
              className="btn btn-primary btn-danger"
              onClick={() => {
                handleSave();
              }}
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
