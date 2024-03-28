import React, { useState, useEffect } from "react";
import MainLayout from "../../Layouts/MainLayout";
import BlogService from "../../services/blogs";

const BlogsList = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedBlog, setSelectedBlog] = useState("");

  useEffect(() => {
    setIsLoading(true);
    setError("");

    BlogService.list()
      .then((fetchedBlogs) => {
        setBlogs(fetchedBlogs);
      })
      .catch((fetchError) => {
        setError(fetchError);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleViewMore = () => {
    setSelectedBlog();
  };

  return (
    <MainLayout>
      <div className="flex flex-col">
        <div className="section p-5">
          <h2 className="section-title text-3xl font-bold m-5">Blogs List</h2>
          <div className="cards grid items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 mx-4">
            {blogs.map((blog) => (
              <div
                key={blog.id} // Assuming each blog has a unique id
                className="card flex flex-col justify-between bg-white p-5 rounded-lg mx-2 xs:mx-0 w-72 h-90 transition-transform transform hover:scale-105"
                style={{ width: "18rem", height: "15rem" }}
              >
                <div>
                  <h3 className="text-gray-700 text-lg font-semibold mb-2">
                    {blog.title}
                  </h3>
                  <p className="text-black line-clamp-2">{blog.content}</p>
                  <p className="text-gray-500 mt-2">Author: {blog.author}</p>
                </div>
                <button
                  className="flex btn-primary mt-4 hover:font-semibold text-indigo-600"
                  onClick={handleViewMore}
                >
                  View More --{">"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default BlogsList;
