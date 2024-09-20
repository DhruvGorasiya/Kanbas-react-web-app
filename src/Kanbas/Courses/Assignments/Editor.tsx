export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <br />
      <br />
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description">
        The assignment is available online. Submit a link to the landing page of
        your Web application running on Netlify. The landing page should include
        the following: Your full name and section, Links to each of the lab
        assignments, Link to the Kanbas application, Links to all relevant
        source code repositories. The Kanbas application should include a link
        to navigate back to the landing page.
      </textarea>
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option value="ASSIGNMENTS">Assignment</option>
              <option value="QUIZZES">Quizzes</option>
              <option value="EXAMS">EXAMS</option>
              <option value="PROJECT">PROJECT</option>
            </select>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option value="GRADESp">Percentage</option>
              <option value="GRADESl">Letter Grade</option>
            </select>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option value="ONLINE">Online</option>
              <option value="OFFLINE">Offline</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top"></td>
          <td>
            <label>Online Entry Options</label>
            <br />
            <input type="checkbox" id="wd-text-entry" /> Text Entry
            <br />
            <input type="checkbox" id="wd-website-url" /> Website URL
            <br />
            <input type="checkbox" id="wd-media-recordings" /> Media Recordings
            <br />
            <input type="checkbox" id="wd-student-annotation" /> Student
            Annotation
            <br />
            <input type="checkbox" id="wd-file-upload" /> File Uploads
          </td>
        </tr>

        <br />
        <tr>
          <td align="right" valign="top"></td>
          <td>
            <label htmlFor="wd-assign-to">Assign to</label>
            <br />
            <input id="wd-assign-to" value="Everyone" />
          </td>
        </tr>

        <br />

        <tr>
          <td align="right" valign="top"></td>
          <td>
            <label htmlFor="wd-due-date">Due</label>
            <br />
            <input id="wd-due-date" type="date" value="2024-05-13" />
          </td>
        </tr>

        <br />

        <tr>
          <td align="right" valign="top"></td>
          <td>
            <label htmlFor="wd-available-from">Available From</label>
            <br />
            <input id="wd-available-from" type="date" value="2024-09-19" />
          </td>
          <td align="right" valign="top"></td>
          <td>
            <label htmlFor="wd-available-until">Until</label>
            <br />
            <input id="wd-available-until" type="date" value="2024-09-19" />
          </td>
        </tr>
      </table>

      <hr />

      <table width="100%">
        <tr>
          <td align="right">
            <button>Cancel</button>   <button>Save</button>
          </td>
        </tr>
      </table>
    </div>
  );
}
