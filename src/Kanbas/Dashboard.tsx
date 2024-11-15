import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleEnrollment } from "./enrollmentReducer";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showAllCourses, setShowAllCourses] = useState(false);

  // Get current user and enrollments from Redux store
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentReducer);
  const isStudent = currentUser.role === "STUDENT";

  // Filter courses based on enrollments
  const userEnrollments = enrollments.filter(
    (enrollment: any) => enrollment.user === currentUser._id
  );

  const enrolledCourseIds = userEnrollments.map(
    (enrollment: any) => enrollment.course
  );

  const displayedCourses = showAllCourses
    ? courses
    : courses.filter((course) => enrolledCourseIds.includes(course._id));

  // Handle enrollment toggle
  const handleEnrollmentToggle = (courseId: string) => {
    dispatch(
      toggleEnrollment({
        userId: currentUser._id,
        courseId: courseId,
      })
    );
  };

  // Handle course navigation
  const handleCourseNavigation = (
    e: React.MouseEvent,
    courseId: string,
    to: string
  ) => {
    e.preventDefault();
    if (!isStudent || enrolledCourseIds.includes(courseId)) {
      navigate(to);
    } else {
      alert("You must be enrolled in this course to view its content.");
    }
  };

  return (
    <div className="p-4" id="wd-dashboard">
      <div className="d-flex justify-content-between align-items-center">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        {isStudent && (
          <button
            className="btn btn-primary"
            onClick={() => setShowAllCourses(!showAllCourses)}
          >
            {showAllCourses ? "Show My Enrollments" : "Show All Courses"}
          </button>
        )}
      </div>
      <hr />

      {/* Faculty Course Management Section */}
      {currentUser.role === "FACULTY" && (
        <>
          <h5>
            This is the faculty dashboard.
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse}
            >
              {" "}
              Add{" "}
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={updateCourse}
              id="wd-update-course-click"
            >
              Update
            </button>
          </h5>
          <br />
          <input
            value={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            value={course.description}
            className="form-control"
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
          />
          <hr />
        </>
      )}

      {/* Course List Section */}
      <h2>
        {showAllCourses
          ? "All Available Courses"
          : `${isStudent ? "My Enrolled" : "Published"} Courses`}{" "}
        ({displayedCourses.length})
      </h2>
      <hr />

      <div className="row row-cols-1 row-cols-md-5 g-4">
        {displayedCourses.map((course) => (
          <div key={course._id} className="col" style={{ width: "300px" }}>
            <div className="card h-100">
              <div
                className="card-img-top"
                style={{
                  height: "160px",
                  backgroundImage: "url('/images/reactjs.jpg')",
                  backgroundSize: "cover",
                }}
              />
              <div className="card-body">
                <h5 className="card-title">{course.name}</h5>
                <p
                  className="card-text overflow-hidden"
                  style={{ height: "100px" }}
                >
                  {course.description}
                </p>

                <div className="d-flex justify-content-between align-items-center">
                  <button
                    className="btn btn-primary"
                    onClick={(e) =>
                      handleCourseNavigation(
                        e,
                        course._id,
                        `/Kanbas/Courses/${course._id}/Home`
                      )
                    }
                  >
                    View Course
                  </button>

                  {isStudent && (
                    <button
                      className={`btn ${enrolledCourseIds.includes(course._id)
                          ? "btn-danger"
                          : "btn-success"
                        }`}
                      onClick={() => handleEnrollmentToggle(course._id)}
                    >
                      {enrolledCourseIds.includes(course._id)
                        ? "Unenroll"
                        : "Enroll"}
                    </button>
                  )}

                  {currentUser.role === "FACULTY" && (
                    <div>
                      <button
                        onClick={() => setCourse(course)}
                        className="btn btn-warning me-2 float-end"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteCourse(course._id)}
                        className="btn btn-danger float-end"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}