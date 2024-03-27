import React from "react";
import Modal from "react-modal";
import { useModal } from "../../components/auth/ModalContext";
import ProjectService from "../../services/projects";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

Modal.setAppElement("#root");

const DetailedProject = ({ project, onClose }) => {
  const { isModalOpen, toggleModal } = useModal();

  const handleDelete = async () => {
    try {
      const response = await ProjectService.delete(project.id);

      if (response && !response.error) {
        toast.success("Project deleted successfully!");
        onClose();
      }
    } catch (error) {
      console.error("Error deleting project:", error);
      toast.error("Error deleting project. Please try again.");
    }
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={toggleModal}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-5 rounded-lg shadow-lg"
      contentLabel="Detailed Project Modal"
    >
      <div className="max-w-screen-md max-h-screen-xl overflow-auto">
        <h2 className="text-2xl font-bold mb-3">{project.name}</h2>
        <p className="text-gray-600 mb-3">{project.description}</p>
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
        <p className="text-gray-600 mb-3">Link: {project.link}</p>
        <p className="text-gray-600 mb-3">Status: {project.status}</p>
        <p className="text-gray-600 mb-3">Start Date: {project.start_date}</p>
        <p className="text-gray-600 mb-3">End Date: {project.end_date}</p>
        <div className="flex flex-row items-center justify-end">
          <button
            onClick={onClose}
            className="btn-primary p-2 mr-3 rounded-lg hover:bg-opacity-90 bg-gray-600 text-white"
          >
            Close
          </button>
          <Link to={`/projects/${project.id}`}>
            <button className="btn-primary p-2 mr-3 px-3 rounded-lg hover:bg-opacity-90 bg-indigo-600 text-white">
              Edit
            </button>
          </Link>
          <button
            onClick={handleDelete}
            className="btn-primary p-2 px-3 rounded-lg hover:bg-opacity-90 bg-amber-600 text-white"
          >
            Delete
          </button>
        </div>
      </div>
      <ToastContainer />
    </Modal>
  );
};

export default DetailedProject;
