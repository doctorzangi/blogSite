import React, { useState } from "react";
import MainLayout from "../../Layouts/MainLayout";
import Widget from "../../components/zWidget";
import ProjectService from "../../services/projects";
import { FaAddressCard } from "react-icons/fa";
import DetailedProject from "./detailedProject";

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
    } catch (error) {
      console.error("Error adding project:", error);
    }
  };

  return (
    <MainLayout>
      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 p-4">
          <Widget
            icon={<FaAddressCard className="h-7 w-7" />}
            title="New Projects"
            subtitle="Create Project"
            linkTo="/projects/newproject"
            onClick={handleAddProject}
          />
          <Widget
            icon={<FaAddressCard className="h-7 w-7" />}
            title="Retrieve Projects"
            subtitle="Projects List"
            linkTo="/projects/list"
          />
          <Widget
            icon={<FaAddressCard className="h-7 w-7" />}
            title="Projects"
            subtitle="New Project"
            linkTo="/projects/newproject"
          />
          <Widget
            icon={<FaAddressCard className="h-7 w-7" />}
            title="Projects"
            subtitle="New Project"
            linkTo="/projects/newproject"
          />
          <Widget
            icon={<FaAddressCard className="h-7 w-7" />}
            title="Projects"
            subtitle="New Project"
            linkTo="/projects/newproject"
          />
          <Widget
            icon={<FaAddressCard className="h-7 w-7" />}
            title="Projects"
            subtitle="New Project"
            linkTo="/projects/newproject"
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default Projects;