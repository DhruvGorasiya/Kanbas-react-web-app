import { createSlice } from "@reduxjs/toolkit";
import * as db from "../../Database";

const initialState = {
    assignments: db.assignments,
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, { payload: assignment }) => {
            console.log("Adding assignment:", assignment);
            const newAssignment = {
                _id: new Date().getTime().toString(),
                title: assignment.title,
                course: assignment.course,
                availableDate: assignment.availableDate,
                dueDate: assignment.dueDate,
                untilDate: assignment.untilDate,
                points: assignment.points,
                description: assignment.description,
                modules: "Multiple Modules"
            };
            console.log("New assignment created:", newAssignment);
            state.assignments = [...state.assignments, newAssignment];
            console.log("Updated assignments state:", state.assignments);
        },
        deleteAssignment: (state, { payload: assignmentID }) => {
            console.log("Deleting assignment:", assignmentID);
            state.assignments = state.assignments.filter(
                (a: any) => a._id !== assignmentID);
        },
        updateAssignment: (state, { payload: assignment }) => {
            console.log("Updating assignment:", assignment);
            state.assignments = state.assignments.map((a: any) =>
                a._id === assignment._id ? assignment : a
            );
            console.log("Updated assignments state:", state.assignments);
        }
    },
});

export const { addAssignment, deleteAssignment, updateAssignment } =
    assignmentsSlice.actions;
export default assignmentsSlice.reducer;