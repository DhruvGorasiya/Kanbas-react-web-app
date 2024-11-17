import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import KanbasNavigation from "./Navigation";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import "./styles.css";
import * as db from "./Database";
import { useEffect, useState } from "react";
import ProtectedRoute from "./Account/ProtectedRoute";
import * as userClient from "./Account/client";
import { useSelector } from "react-redux";
import * as courseClient from "./Courses/client";

export default function Kanbas() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [courses, setCourses] = useState<any[]>([]);
  const [enrolledCourses, setEnrolledCourses] = useState<any[]>([]);
  const fetchCourses = async () => {
    let courses = [];
    try {
      courses = await userClient.findAllCourses();
    } catch (error) {
      console.error(error);
    }
    setCourses(courses);
  };


  const fetchEnrolledCourses = async () => {
    let enrolledCourses = [];
    try {
      enrolledCourses = await userClient.findMyCourses();
    } catch (error) {
      console.error(error);
    }
    setEnrolledCourses(enrolledCourses);
  };

  useEffect(() => {
    if(currentUser){
      fetchCourses();
    fetchEnrolledCourses();
    }
  }, [currentUser]);

  const [course, setCourse] = useState<any>({
    _id: "1234",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    description: "New Description",
  });


  const deleteCourse = async (courseId: any) => {
    const status = await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  

  return (
    <div id="wd-kanbas">
      <KanbasNavigation />
      <div className="wd-main-content-offset p-3">
        <Routes>
          <Route path="/" element={<Navigate to="/Kanbas/Account" />} />
          <Route path="/Account/*" element={<Account />} />
          <Route
            path="/Dashboard"
            element={
              <ProtectedRoute>
                <Dashboard
                  courses={courses}
                  course={course}
                  enrolledCourses={enrolledCourses}
                  setEnrolledCourses={setEnrolledCourses}
                  setCourses={setCourses}
                  // setAllCourses={setCourses}
                  setCourse={setCourse}
                  deleteCourse={deleteCourse}

                />
              </ProtectedRoute>
            }
          />
          <Route
            path="Courses/:cid/*"
            element={
              <ProtectedRoute>
                <Courses courses={courses} />
              </ProtectedRoute>
            }
          />
          <Route path="/Calendar" element={<h1>Calendar</h1>} />
          <Route path="/Inbox" element={<h1>Inbox</h1>} />
        </Routes>
      </div>
    </div>
  );
}
