import { Link } from "react-router-dom";
import * as db from "../../Database";
import { useParams } from "react-router";

export default function AssignmentEditor() {
  const { cid,aid } = useParams();
  const assignmentsInfo = db.assignments.find((assignments) => assignments._id === aid);

  if (!assignmentsInfo) {
    return <div>Assignment not found</div>;
  }

  return (
    <div id="wd-assignments-editor">
      <div id="wd-css-styling-forms">
        <div className="mb-3">
          <label htmlFor="wd-name" className="form-label">
            Assignment Name
          </label>
          <input id="wd-name" className="form-control" value={assignmentsInfo.title} />
        </div>

        <div className="mb-3">
          <textarea
            className="form-control"
            id="wd-description"
            rows={5}
            defaultValue={assignmentsInfo.description}
          />
        </div>
      </div>
      <br />

      <div className="container mt-4">
        <form>
          <div className="row mb-3">
            <label htmlFor="wd-points" className="col-sm-2 col-form-label" style={{textAlign:"right"}}>
              Points
            </label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                id="wd-points"
                value={assignmentsInfo.points}
              />
            </div>
          </div>

          <div className="row mb-3">
            <label htmlFor="wd-group" className="col-sm-2 col-form-label" style={{textAlign:"right"}}>
              Assignment Group
              
            </label>
            <div className="col-sm-10">
              <select className="form-control" id="wd-group">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="QUIZZES">QUIZZES</option>
                <option value="EXAMS">EXAMS</option>
                <option value="PROJECT">PROJECT</option>
              </select>
            </div>
          </div>

          <div className="row mb-3">
            <label
              htmlFor="wd-display-grade-as"
              className="col-sm-2 col-form-label"
              style={{textAlign:"right"}}
            >
              Display Grade as
            </label>
            <div className="col-sm-10">
              <select className="form-control" id="wd-display-grade-as">
                <option value="GRADESp">Percentage</option>
                <option value="GRADESl">Letter Grade</option>
              </select>
            </div>
          </div>

          <div className="row mb-3">
            <label
              htmlFor="wd-submission-type"
              className="col-sm-2 col-form-label"
              style={{textAlign:"right"}}
            >
              Submission Type
            </label>
            <div className="col-sm-10">
              <div
                style={{
                  border: "1px solid #dee2e6",
                  borderRadius: "0.25rem",
                  padding: "1rem",
                }}
              >
                <select className="form-control mb-3" id="wd-submission-type">
                  <option>Online</option>
                  <option>Offline</option>
                </select>
                <div>
                  <p className="mb-2">
                    <b>Online Entry Options</b>
                  </p>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="wd-text-entry"
                    />
                    <label className="form-check-label" htmlFor="wd-text-entry">
                      Text Entry
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="wd-website-url"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="wd-website-url"
                    >
                      Website URL
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="wd-media-recordings"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="wd-media-recordings"
                    >
                      Media Recordings
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="wd-student-annotation"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="wd-student-annotation"
                    >
                      Student Annotation
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="wd-file-upload"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="wd-file-upload"
                    >
                      File Uploads
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-sm-2 col-form-label" style={{textAlign:"right"}}>Assign</label>
            <div className="col-sm-10">
              <div
                style={{
                  border: "1px solid #dee2e6",
                  borderRadius: "0.25rem",
                  padding: "1rem",
                }}
              >
                <div className="mb-3">
                  <label htmlFor="wd-assign-to" className="form-label">
                    <b>Assign to</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="wd-assign-to"
                    defaultValue=""
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="wd-due-date" className="form-label">
                    Due
                  </label>
                  <input
                    type="datetime-local"
                    className="form-control"
                    id="wd-due-date"
                    value={assignmentsInfo.availableDate[1]}
                  />
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="wd-available-from" className="form-label">
                      Available from
                    </label>
                    <input
                      type="datetime-local"
                      className="form-control"
                      id="wd-available-from"
                      defaultValue={assignmentsInfo.availableDate[1]}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="wd-available-until" className="form-label">
                      Until
                    </label>
                    <input
                      type="datetime-local"
                      className="form-control"
                      id="wd-available-until"
                      value={assignmentsInfo.dueDate[1]}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      <hr />

      <table width="100%">
        <tr>
          <td align="right">
            <Link
              id="wd-course-quizzes-link"
              to={`/Kanbas/Courses/${cid}/Assignments`}
            >

              <button
              id="wd-add-module-btn"
              className="btn btn-lg btn-danger me-1 float-end"
            >
              Save
            </button>

            </Link>
            <Link
              id="wd-course-quizzes-link"
              to={`/Kanbas/Courses/${cid}/Assignments`}
            >
              <button
              id="wd-add-module-btn"
              className="btn btn-lg btn-secondary me-1 float-end"
            >
              Cancel
            </button>
            </Link>
          </td>
        </tr>
      </table>
    </div>
  );
}
