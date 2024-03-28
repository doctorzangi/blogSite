import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ProjectService from "../../services/projects";
import MainLayout from "../../Layouts/MainLayout";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ProjectDetail = () => {
  const [project, setProject] = useState(null);
  const [error, setError] = useState("");
  const { projectId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    ProjectService.detail(projectId)
      .then((fetchedProject) => {
        setProject(fetchedProject);
      })
      .catch((fetchError) => {
        setError(fetchError);
      });
  }, [projectId]);

  if (!project) {
    return <div>Loading...</div>;
  }

  const handleDeleteProject = async (projectId) => {
    try {
      await ProjectService.delete(projectId);
      toast.success("Project Deleted Successfully");
      navigate("/projects/list");
    } catch (error) {
      toast.error("Error Deleting Project");
    }
  };

  return (
    <MainLayout>
      <div className="flex justify-center items-center py-9">
        <div className="w-full md:w-1/2 lg:w-1/2 px-4">
          <div className="grid grid-cols-2 gap-4">
            {Object.values(project.images).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full h-auto object-cover rounded-lg" 
              />
            ))}
          </div>
          <h2 className="text-2xl font-bold mb-3">{project.name}</h2>
          <p className="text-gray-600 mb-3">{project.description}</p>
          {/* Render other project details */}
          <p className="text-gray-600 mb-3">Link: {project.link}</p>
          <p className="text-gray-600 mb-3">Status: {project.status}</p>
          <p className="text-gray-600 mb-3">Start Date: {project.start_date}</p>
          <p className="text-gray-600 mb-3">End Date: {project.end_date}</p>
          <Link
            to={'/projects/list'}
            className="btn-primary mr-3 p-2 px-3 rounded-lg bg-gray-600 text-white hover:bg-opacity-90"
          >
            Back
          </Link>
          <button
            onClick={() => handleDeleteProject(projectId)}
            className="btn-primary mr-3 p-2 px-3 rounded-lg bg-amber-600 text-white hover:bg-opacity-90"
          >
            Delete
          </button>
          <Link
            to={`/projects/update/${projectId}`}
            className="btn-primary p-2 px-3 rounded-lg bg-indigo-600 text-white hover:bg-opacity-90"
          >
            Edit
          </Link>
        </div>
      </div>
      <ToastContainer />
    </MainLayout>
  );
};

export default ProjectDetail;
