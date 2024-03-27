import React, { useState, useEffect } from "react";
import MainLayout from "../../Layouts/MainLayout";
import ProjectService from "../../services/projects";
import DetailedProject from "./detailedProject";
import { useModal } from "../../components/auth/ModalContext";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const { toggleModal } = useModal();

  useEffect(() => {
    setIsLoading(true);
    setError("");

    ProjectService.list()
      .then((fetchedProjects) => {
        setProjects(fetchedProjects);
      })
      .catch((fetchError) => {
        setError(fetchError);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleViewMore = (project) => {
    setSelectedProject(project);
    toggleModal(); // Open the modal when "View More" is clicked
  };

  const handleClose = () => {
    setSelectedProject(null);
    toggleModal(); // Close the modal
  };

  const handleDeleteProject = async (projectId) => {
    try {
      await ProjectService.delete(projectId);
      // Filter out the deleted project from the list
      setProjects(projects.filter((project) => project.id !== projectId));
      handleClose(); // Close the modal after successful deletion
    } catch (error) {
      console.error("Error deleting project:", error);
      // Handle error if necessary
    }
  };

  return (
    <MainLayout>
      <div className="flex flex-col">
        <div className="section p-5">
          <h2 className="section-title text-3xl font-bold m-5">New Projects</h2>
          <div className="cards grid items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 mx-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className="card bg-white p-3 rounded-lg mx-2 xs:mx-0 w-72 h-90 transition-transform transform hover:scale-105"
                style={{ width: "18rem", height: "22rem" }}
              >
                {project.images && Object.values(project.images).length > 0 && (
                  <img
                    src={Object.values(project.images)[0]}
                    alt={project.name}
                    className="w-full h-40 object-cover mb-4 rounded-lg transition-transform transform hover:scale-105"
                  />
                )}
                <h3 className="text-gray-700 text-lg font-semibold mb-2">
                  {project.name}
                </h3>
                <p className="text-black line-clamp-2">{project.description}</p>
                <button
                  className="btn-primary mt-4 hover:font-semibold text-indigo-600"
                  onClick={() => handleViewMore(project)}
                >
                  View More --{">"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedProject && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-80">
          <DetailedProject project={selectedProject} onClose={handleClose} onDelete={handleDeleteProject} />
        </div>
      )}
    </MainLayout>
  );
};

export default ProjectList;
