import React, { useState } from "react";
import MainLayout from "../../Layouts/MainLayout";
import Widget from "../../components/zWidget";
import ProjectService from "../../services/projects";
import { FaGetPocket, FaPlus } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAddProject = async () => {
    try {
      const newProject = {
        image: "Image",
        name: "New Project",
        description: "Description of the new project",
      };

      const addedProject = await ProjectService.add(newProject);
      setProjects([...projects, addedProject]);
      toast.success("Project added successfully!");
    } catch (error) {
      toast.error("Error adding project");
    }
  };

  return (
    <MainLayout>
      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 p-4">
          <Widget
            icon={<FaPlus className="h-7 w-7" />}
            title="New Projects"
            subtitle="Create Project"
            linkTo="/projects/newproject"
            onClick={handleAddProject}
          />
          <Widget
            icon={<FaGetPocket className="h-7 w-7" />}
            title="Retrieve Projects"
            subtitle="Projects List"
            linkTo="/projects/list"
          />
        </div>
      </div>
      <ToastContainer />
    </MainLayout>
  );
};

export default Projects;