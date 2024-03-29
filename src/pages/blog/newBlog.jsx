import React, { useState, useEffect } from "react";
import MainLayout from "../../Layouts/MainLayout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BlogService from "../../services/blogs";
import AuthorService from "../../services/author";
import CategoryService from '../../services/category'
import { useNavigate } from "react-router-dom";

const NewBlog = () => {
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [publishedDate, setPublishedDate] = useState("");
  const [authorId, setAuthorId] = useState("");
  const [authors, setAuthors] = useState([]);
  const navigate = useNavigate();

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
      const formData = {
        title: title,
        content: content,
        published_date: publishedDate,
        category: categoryId,
        author: authorId,
      };

      const addedBlog = await BlogService.add(formData);

      if (addedBlog) {
        toast.success("Blog created successfully!");
        navigate("/blogs");
      } else {
        toast.error("Failed to create blog. Please try again.");
        console.log(addedBlog);
      }
    } catch (error) {
      console.error("Error creating blog:", error);
      toast.error("Error creating blog. Please try again.");
    }
  };

  return (
    <MainLayout>
      <div className="container p-9 py-8">
        <div className="flex">
          <h1 className="text-3xl font-bold mb-4">Create New Blog</h1>
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
              value={publishedDate}
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

          {/* Submit Button */}
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

export default NewBlog;
