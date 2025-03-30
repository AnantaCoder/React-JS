import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProject,
  deleteProject,
  selectProject,
} from "../features/projects/projectSlice";
import UpdateProjects from "./UpdateProjects";

const ProjectsManager = () => {
  const dispatch = useDispatch();
  const { projects, selectedProjectId } = useSelector(
    (state) => state.projects
  );

  const [newName, setNewName] = useState("");
  const [newStatus, setNewStatus] = useState("");
  const [newComment, setNewComment] = useState("");


  const handleAddProject = () => {
    if (!newComment.trim()) return;
    dispatch(
      addProject({ name: newName, status: newStatus, comment: newComment })
    );
    setNewName("");
    setNewStatus("");
    setNewComment("");
  };

  const handleSelectProject = (id) => {
    dispatch(selectProject(id));
  };


  const handleDeleteProject = (id) => {
    if (selectedProjectId === id) {
      dispatch(selectProject(null));
    }
    dispatch(deleteProject(id));
  };

  return (
    <div className="max-w-3xl mx-auto p-4 ">
      <h2 
  className="text-3xl md:text-4xl font-bold text-center mb-6 
             bg-gradient-to-r from-gray-200 via-green-500 to-purple-500 
             text-transparent bg-clip-text 
             animate-pulse transition-all duration-500 
             hover:scale-110 hover:tracking-wider hover:text-white 
             shadow-lg drop-shadow-xl p-4"
> <a href="https://github.com/anantacoder">
Projects Manager</a>
</h2>


      <div className="border bg-gradient-to-r from-purple-500 to-purple-900 border-red-300 p-6 rounded-lg mb-6 shadow-md">
        <h3 className="text-xl font-semibold mb-4">Add New Project</h3>
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <input
            type="text"
            placeholder="Name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="border border-red-300 p-3 rounded w-full md:w-1/3 focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            placeholder="Status (e.g., pending)"
            value={newStatus}
            onChange={(e) => setNewStatus(e.target.value)}
            className="border border-gray-300 p-3 rounded w-full md:w-1/3 focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            placeholder="Comment"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="border border-gray-300 p-3 rounded w-full md:w-1/2 focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleAddProject}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold p-3 rounded transition duration-200"
          >
            Add Project
          </button>
        </div>
      </div>

      {projects && <UpdateProjects />}

      <div className="border border-green-500 p-6 rounded-lg shadow-lg">
  <h3 className="text-xl font-bold mb-4 text-amber-600">Projects List : </h3>
  <ul>
    {projects.map((project) => (
      <li
        key={project.id}
        className={`flex flex-col md:flex-row items-start md:items-center justify-between p-4 mb-4 rounded shadow-lg transition-colors duration-300 ${
          selectedProjectId === project.id ? "bg-green-800" : "bg-gray-900"
        }`}
      >
        <div className="mb-4 md:mb-0">
          <p className="text-sm text-green-200">
            <span className="font-bold text-green-400">Name:</span> {project.name}
          </p>
          <p className="text-sm text-green-200">
            <span className="font-bold text-green-400">ID:</span> {project.id}
          </p>
          <p className="text-sm text-green-200">
            <span className="font-bold text-green-400">Status:</span> {project.status}
          </p>
          <p className="text-sm text-green-200">
            <span className="font-bold text-green-400">Comment:</span> {project.comment}
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => handleSelectProject(project.id)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition duration-200"
          >
            Select
          </button>
          <button
            onClick={() => handleDeleteProject(project.id)}
            className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded transition duration-200"
          >
            Delete
          </button>
        </div>
      </li>
    ))}
  </ul>
</div>

    </div>
  );
};

export default ProjectsManager;
