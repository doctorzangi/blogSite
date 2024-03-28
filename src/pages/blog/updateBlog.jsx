import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BlogService from "../../services/blogs";
import AuthorService from '../../services/author'
import CategoryService from '../../services/category'
import MainLayout from "../../Layouts/MainLayout";

const UpdateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [published_date, setPublishedDate] = useState("");
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [authors, setAuthors] = useState([]);
  const [authorId, setAuthorId] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { blogId } = useParams();

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const blogDetails = await BlogService.detail(blogId);
        setTitle(blogDetails.title);
        setContent(blogDetails.content);
        setPublishedDate(blogDetails.published_date);
        setCategoryId(blogDetails.categoryId);
        setAuthorId(blogDetails.authorId);
      } catch (error) {
        console.error("Error fetching blog details:", error);
        toast.error("Error fetching blog details. Please try again.");
      }
    };

    fetchBlogDetails();
  }, [blogId]);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const fetchedAuthors = await AuthorService.list();
        setAuthors(fetchedAuthors);
      } catch (error) {
        console.error("Error fetching authors:", error);
      }
    };

    fetchAuthors();
  }, []);
  
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const fetchedCategories = await CategoryService.list();
        setCategories(fetchedCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      let formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      formData.append("category", categoryId);
      formData.append("author", authorId);
      formData.append("published_date", published_date);

      const updatedBlog = await BlogService.update({
        reqBody: formData,
        id: blogId,
      });

      if (updatedBlog) {
        toast.success("Blog updated successfully!");
        navigate("/blogs");
      } else {
        toast.error("Failed to update blog. Please try again.");
      }
    } catch (error) {
      console.error("Error updating blog:", error);
      toast.error("Error updating blog. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate(`/blogs/detail/${blogId}`);
  };

  return (
    <MainLayout>
      <div className="container p-9 py-8">
        <div className="flex">
          <h1 className="text-3xl font-bold mb-4">Update Blog</h1>
          <div></div>
        </div>
        <form
          className="bg-white p-6 rounded-md shadow-md"
          onSubmit={handleSubmit}
        >
          
          {/* Title */}
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="blogTitle"
            >
              Blog Title
            </label>
            <input
              className="focus:outline-none w-full px-3 py-2 bg-gray-50 border rounded-md"
              type="text"
              id="blogTitle"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter blog title"
              required
            />
          </div>

          {/* Content */}
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="blogContent"
            >
              Content
            </label>
            <textarea
              className="focus:outline-none w-full px-3 py-2 bg-gray-50 border rounded-md"
              id="blogContent"
              name="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows="6"
              placeholder="Enter blog content"
              required
            ></textarea>
          </div>

          {/* Published Date */}
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="blogPublishedDate"
            >
              Published Date
            </label>
            <input
              className="focus:outline-none w-full px-3 py-2 bg-gray-50 border rounded-md"
              type="datetime-local"
              id="blogPublishedDate"
              name="published_date"
              value={published_date}
              onChange={(e) => setPublishedDate(e.target.value)}
              required
            />
          </div>

          {/* Category */}
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="blogAuthor"
            >
              Category
            </label>
            <select
              className="focus:outline-none w-full px-3 py-2 bg-gray-50 border rounded-md"
              id="blogCategory"
              name="category"
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
              required
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          {/* Author */}
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="blogAuthor"
            >
              Author
            </label>
            <select
              className="focus:outline-none w-full px-3 py-2 bg-gray-50 border rounded-md"
              id="blogAuthor"
              name="author"
              value={authorId}
              onChange={(e) => setAuthorId(e.target.value)}
              required
            >
              <option value="">Select Author</option>
              {authors.map((author) => (
                <option key={author.id} value={author.id}>
                  {author.username}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-row items-center justify-end">
            <div className="mt-6 mr-5">
              <button
                type="button"
                onClick={handleCancel}
                className="bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition duration-300"
              >
                Cancel
              </button>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition duration-300"
                disabled={loading}
              >
                {loading ? "Updating..." : "Update"}
              </button>
            </div>
          </div>
        </form>
        <ToastContainer />
      </div>
    </MainLayout>
  );
};

export default UpdateBlog;
