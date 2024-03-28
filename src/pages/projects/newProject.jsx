import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProjectService from "../../services/projects";
import MainLayout from "../../Layouts/MainLayout";

const NewProject = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState("");
  const [link, setLink] = useState("");
  const [start_date, setStartDate] = useState("");
  const [end_date, setEndDate] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let formData = new FormData();
      formData.append('name', name);
      formData.append('description', description);
      formData.append('images', images);
      formData.append('link', link);
      formData.append('start_date', start_date);
      formData.append('end_date', end_date);
      formData.append('status', status);
  
      const addedProject = await ProjectService.add(formData);
  
      if (addedProject) {
        toast.success("Project created successfully!");
        navigate("/projects");
      } else {
        toast.error("Failed to create project. Please try again.");
      }
    } catch (error) {
      console.error("Error creating project:", error);
      toast.error("Error creating project. Please try again.");
    }
  };
  

  return (
    <MainLayout>
      <div className="container p-9 py-8">
        <div className="flex">
          <h1 className="text-3xl font-bold mb-4">Create New Project</h1>
          <div></div>
        </div>
        <form
          className="bg-white p-6 rounded-md shadow-md"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="projectTitle"
            >
              Project Title
            </label>
            <input
              className="focus:outline-none w-full px-3 py-2 bg-gray-50 border rounded-md"
              type="text"
              id="projectTitle"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter project title"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="projectDescription"
            >
              Description
            </label>
            <textarea
              className="focus:outline-none w-full px-3 py-2 bg-gray-50 border rounded-md"
              id="projectDescription"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="4"
              placeholder="Enter project description"
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="projectImages"
            >
              Add Images
            </label>
            <textarea
              className="focus:outline-none w-full px-3 py-2 bg-gray-50 border rounded-md"
              id="images"
              name="images"
              value={images}
              onChange={(e) => setImages(e.target.value)}
              rows="4"
              placeholder="{images: https://image.com}"
            ></textarea>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="start_date"
              >
                Start Date
              </label>
              <input
                className="focus:outline-none w-full px-3 py-2 bg-gray-50 border rounded-md"
                type="date"
                id="start_date"
                name="start_date"
                value={start_date}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div>
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="end_date"
              >
                End Date
              </label>
              <input
                className="focus:outline-none w-full px-3 py-2 bg-gray-50 border rounded-md"
                type="date"
                id="end_date"
                name="end_date"
                value={end_date}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="projectLink"
            >
              Project Link
            </label>
            <input
              className="focus:outline-none w-full px-3 py-2 bg-gray-50 border rounded-md"
              type="text"
              id="projectLink"
              name="link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="Enter project link"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="projectStatus"
            >
              Status
            </label>
            <select
              className="focus:outline-none w-full px-3 py-2 bg-gray-50 border rounded-md"
              id="projectStatus"
              name="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
            >
              <option value="">Select Status</option>
              <option value="Active">Active</option>
              <option value="Completed">Completed</option>
              <option value="Paused">Paused</option>
            </select>
          </div>
          <div className="flex flex-row items-center justify-end">
            <div className="mt-6 mr-5">
              <button className="bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition duration-300">
                Cancel
              </button>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition duration-300"
              >
                Create
              </button>
            </div>
          </div>
        </form>
        <ToastContainer />
      </div>
    </MainLayout>
  );
};

export default NewProject;