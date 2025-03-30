import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProject } from "../features/projects/projectSlice";
function UpdateProjects() {
  const dispatch = useDispatch();
  const [updateStatus, setUpdateStatus] = useState("");
  const [updateComment, setUpdateComment] = useState("");
  const [updateName, setUpdateName] = useState("");
  const { selectedProjectId } = useSelector((state) => state.projects);
  const handleUpdateProject = () => {
    if (selectedProjectId) {
      dispatch(
        updateProject({
          name: updateName,
          status: updateStatus,
          comment: updateComment,
        })
      );
      setUpdateStatus("");
      setUpdateComment("");
      setUpdateName("");
    } else {
      alert("Please select a project to update");
    }
  };
  return (
    <div>
      <div className="bg-gradient-to-r from-purple-500 to-purple-900 border border-amber-300 p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-4">Update Selected Project</h3>
        {selectedProjectId ? (
          <p className="mb-4">
            <span className="font-bold">Selected Project ID:</span>{" "}
            {selectedProjectId}
          </p>
        ) : (
          <p className="mb-4 text-gray-200">No project selected.</p>
        )}
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <input
            type="text"
            placeholder="New Name"
            value={updateName}
            onChange={(e) => setUpdateName(e.target.value)}
            className="border border-gray-300 p-3 rounded w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            type="text"
            placeholder="New Status"
            value={updateStatus}
            onChange={(e) => setUpdateStatus(e.target.value)}
            className="border border-gray-300 p-3 rounded w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            type="text"
            placeholder="New Comment"
            value={updateComment}
            onChange={(e) => setUpdateComment(e.target.value)}
            className="border border-gray-300 p-3 rounded w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            onClick={handleUpdateProject}
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded transition duration-200"
          >
            Update Project
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpdateProjects;
