import axios from "axios";
const API_BASE = process.env.REACT_APP_REMOTE_SERVER;
const ASSIGNMENT_API=`${API_BASE}/api/assignments`;
const COURSE_API=`${API_BASE}/api/courses`;

export const createAssignment= async (courseId:any, assignment:any)=>{
    console.log("SEcondasdfasdnfkajsdhfaipsohdf:", assignment);
    const response=await axios.post(`${COURSE_API}/${courseId}/assignments`,assignment);
    return response.data;
};

export const fetchAssignment= async (courseId:any) => {
    const response= await axios.get(`${COURSE_API}/${courseId}/assignments`);
    return response.data;
}

export const updateAssignment= async (assignment:any)=>{
    const response=await axios.put(`${ASSIGNMENT_API}/${assignment._id}`,assignment);
    return response.data;
};

export const deleteAssignment = async (assignId:any)=>{
    const response= await axios.delete(`${ASSIGNMENT_API}/${assignId}`);
    return response.data;
};

export const fetchAllAssignments = async (courseId:any) => {
    const response = await axios.get(`${COURSE_API}/${courseId}/assignments`);
    return response.data;
}

export const fetchAssignmentById = async (courseId:any, assignmentId:any) => {
    const response = await axios.get(`${COURSE_API}/${courseId}/assignments/${assignmentId}`);
    return response.data;
}