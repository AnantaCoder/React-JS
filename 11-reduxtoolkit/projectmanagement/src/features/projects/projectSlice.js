import { createSlice, nanoid } from "@reduxjs/toolkit";

// we can add axios to fetch api data 

const initialState = {
    projects: [
        {
            name:"Project 1 ",
            id: 1,
            status: 'pending',
            comment: "This is where U add comments about this projects "
        }
    ],
    selectedProjectId: null // New property to store the current project id.
};

//Use Redux state to store a selected project id (via a selectedProjectId property and a selectProject reducer). Then, update using that id.
export const projectSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        // here we can add methods of the store named 
        addProject: (state, action) => {
            const project = {
                name:action.payload.name||'project name',
                id: nanoid(),
                status: action.payload.status || 'pending',
                comment: action.payload.comment
            }
            state.projects.push(project)
        },
        deleteProject: (state, action) => {
            state.projects = state.projects.filter(
                (project) => project.id !== action.payload
            )
        },
        updateProject: (state, action) => {
            const project = state.projects.find(
                (p) => p.id === state.selectedProjectId
            )
            if (project) {
                if (action.payload.status !== undefined) {
                    project.status = action.payload.status;
                }
                if (action.payload.comment !== undefined) {
                    project.comment = action.payload.comment;
                }
                if (action.payload.name !== undefined) {
                    project.name = action.payload.name;
                }
            }
        },

        selectProject: (state, action) => {
            state.selectedProjectId = action.payload; // Payload is the project ID.
        },

    }
})

export const {addProject,deleteProject,updateProject,selectProject}= projectSlice.actions

export default projectSlice.reducer