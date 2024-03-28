import React from "react";
import MainLayout from "../../Layouts/MainLayout";
import Widget from "../../components/zWidget";
import { FaAddressCard } from "react-icons/fa";

const Blogs = () => {

  return (
    <MainLayout>
      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 p-4">
          <Widget
            icon={<FaAddressCard className="h-7 w-7" />}
            title="New Blogs"
            subtitle="Create Blog"
            linkTo="/blogs/newblog"
          />
          <Widget
            icon={<FaAddressCard className="h-7 w-7" />}
            title="Retrieve Blogs"
            subtitle="Blogs List"
            linkTo="/blogs/list"
          />
          <Widget
            icon={<FaAddressCard className="h-7 w-7" />}
            title="Blogs"
            subtitle="New Blog"
            linkTo="/blogs/newblog"
          />
          <Widget
            icon={<FaAddressCard className="h-7 w-7" />}
            title="blogs"
            subtitle="New Blog"
            linkTo="/blogs/newblog"
          />
          <Widget
            icon={<FaAddressCard className="h-7 w-7" />}
            title="blogs"
            subtitle="New Blog"
            linkTo="/blogs/newblog"
          />
          <Widget
            icon={<FaAddressCard className="h-7 w-7" />}
            title="blogs"
            subtitle="New Blog"
            linkTo="/blogs/newblog"
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default Blogs;