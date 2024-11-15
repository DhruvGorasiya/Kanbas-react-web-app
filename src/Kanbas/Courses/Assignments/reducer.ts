// import { createSlice } from "@reduxjs/toolkit";
// import { assignments } from "../../Database";

// const initialState = {
//   assignments: assignments,
// };

// const assignmentsSlice = createSlice({
//   name: "assignments",
//   initialState,
//   reducers: {
//     addAssignment: (state, { payload: assignment }) => {
//       console.log(assignment);
//       const newAssignment: any = {
//         _id: new Date().getTime().toString(),
//         name: assignment.name,
//         dueDate: assignment.dueDate,
//         course: assignment.course,
//         description: assignment.description,
//       };
//       state.assignments = [...state.assignments, newAssignment] as any;
//       console.log(state.assignments);
//     },
//     deleteAssignment: (state, { payload: assignmentId }) => {
//       state.assignments = state.assignments.filter(
//         (a: any) => a._id !== assignmentId
//       );
//     },
//     updateAssignment: (state, { payload: assignment }) => {
//       state.assignments = state.assignments.map((a: any) =>
//         a._id === assignment._id ? assignment : a
//       ) as any;
//     },
//   },
// });

// export const {
//   addAssignment,
//   deleteAssignment,
//   updateAssignment,
// } = assignmentsSlice.actions;
// export default assignmentsSlice.reducer;



// import { createSlice } from "@reduxjs/toolkit";
// import { assignments } from "../../Database";

// const initialState = {
//     assignments: assignments,
// };

// const assignmentsSlice = createSlice({
//     name: "assignments",
//     initialState,
//     reducers: {
//         addAssignment: (state, action) => {
//             console.log("ADD ASSIGNMENT REDUCER CALLED");
//             console.log("Payload received:", action.payload);
            
//             const newAssignment = {
//                 _id: new Date().getTime().toString(),
//                 title: action.payload.title,
//                 course: action.payload.course,
//                 description: action.payload.description,
//                 points: action.payload.points,
//                 dueDate: action.payload.dueDate,
//                 availableDate: action.payload.availableDate,
//                 untilDate: action.payload.untilDate,
//                 modules: "Multiple Modules"
//             };
            
//             console.log("New assignment to be added:", newAssignment);
//             state.assignments.push(newAssignment);
//             console.log("Updated assignments state:", state.assignments);
//         },
//         updateAssignment: (state, action) => {
//             console.log("UPDATE ASSIGNMENT REDUCER CALLED");
//             console.log("Payload received:", action.payload);
            
//             const index = state.assignments.findIndex(
//                 (a) => a._id === action.payload._id
//             );
            
//             if (index !== -1) {
//                 state.assignments[index] = action.payload;
//                 console.log("Assignment updated successfully");
//             } else {
//                 console.log("Assignment not found for update");
//             }
            
//             console.log("Updated assignments state:", state.assignments);
//         },
//         deleteAssignment: (state, action) => {
//             console.log("DELETE ASSIGNMENT REDUCER CALLED");
//             state.assignments = state.assignments.filter(
//                 (a) => a._id !== action.payload
//             );
//         },
//     },
// });

// export const { addAssignment, deleteAssignment, updateAssignment } =
//     assignmentsSlice.actions;
// export default assignmentsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
    assignments: assignments,
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