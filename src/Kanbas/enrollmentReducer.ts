import { createSlice } from "@reduxjs/toolkit";
import { enrollments as initialEnrollments } from "./Database";

const initialState = {
  enrollments: initialEnrollments,
};

const enrollmentSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    toggleEnrollment: (state, action) => {
      const { userId, courseId } = action.payload;
      
      // Check if enrollment exists
      const existingEnrollmentIndex = state.enrollments.findIndex(
        (enrollment) => 
          enrollment.user === userId && 
          enrollment.course === courseId
      );

      if (existingEnrollmentIndex >= 0) {
        // Unenroll: Remove the enrollment
        state.enrollments.splice(existingEnrollmentIndex, 1);
      } else {
        // Enroll: Add new enrollment
        state.enrollments.push({
          user: userId,
          course: courseId,
          _id: new Date().getTime().toString(),
        });
      }
    },

    clearEnrollments: (state) => {
      state.enrollments = initialEnrollments;
    },
  },
});

export const { toggleEnrollment, clearEnrollments } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;