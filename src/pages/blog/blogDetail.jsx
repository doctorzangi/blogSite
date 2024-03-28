import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import BlogService from "../../services/blogs";
import MainLayout from "../../Layouts/MainLayout";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const BlogDetail = () => {
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState("");
  const { blogId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    BlogService.detail(blogId)
      .then((fetchedBlog) => {
        setBlog(fetchedBlog);
      })
      .catch((fetchError) => {
        setError(fetchError);
      });
  }, [blogId]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  const handleDeleteBlog = async (blogId) => {
    try {
      await BlogService.delete(blogId);
      toast.success("Blog Deleted Successfully");
      navigate("/blogs/list");
    } catch (error) {
      toast.error("Error Deleting Blog");
    }
  };
  return (
    <MainLayout>
      <div className="flex justify-center items-center py-9">
        <div className="w-full md:w-1/2 lg:w-1/2 px-4">
          <h2 className="text-2xl font-bold mb-3">{blog.title}</h2>
          <p className="text-gray-600 mb-3">{blog.content}</p>
          {/* Render other blog details */}
          <p className="text-gray-600 mb-3">Category: {blog.category}</p>
          <p className="text-gray-600 mb-3">Auther: {blog.status}</p>
          <p className="text-gray-600 mb-3">Published Date: {blog.published_date}</p>
          <Link
            to={'/blogs/list'}
            className="btn-primary mr-3 p-2 px-3 rounded-lg bg-gray-600 text-white hover:bg-opacity-90"
          >
            Back
          </Link>
          <button
            onClick={() => handleDeleteBlog(blogId)}
            className="btn-primary mr-3 p-2 px-3 rounded-lg bg-amber-600 text-white hover:bg-opacity-90"
          >
            Delete
          </button>
          <Link
            to={`/blogs/update/${blogId}`}
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

export default BlogDetail;
