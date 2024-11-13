import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  enrollments: JSON.parse(localStorage.getItem("enrollments") || "[]"),
};

const enrollmentSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    toggleEnrollment: (state, action) => {
      const { userId, courseId } = action.payload;
      const existingEnrollment = state.enrollments.find(
        (e: any) => e.user === userId && e.course === courseId
      );

      if (existingEnrollment) {
        state.enrollments = state.enrollments.filter(
          (e: any) => !(e.user === userId && e.course === courseId)
        );
      } else {
        state.enrollments.push({ user: userId, course: courseId });
      }
      
      // Persist to localStorage
      localStorage.setItem("enrollments", JSON.stringify(state.enrollments));
    },
    setEnrollments: (state, action) => {
      state.enrollments = action.payload;
      localStorage.setItem("enrollments", JSON.stringify(action.payload));
    },
  },
});

export const { toggleEnrollment, setEnrollments } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;

