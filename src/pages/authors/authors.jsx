import React from "react";
import MainLayout from "../../Layouts/MainLayout";
import Widget from "../../components/zWidget";
import { FaGetPocket, FaPlus } from "react-icons/fa";

const Authors = () => {

  return (
    <MainLayout>
      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 p-4">
          <Widget
            icon={<FaPlus className="h-7 w-7" />}
            title="New Authors"
            subtitle="Create Author"
            linkTo="/authors/newauthor"
          />
          <Widget
            icon={<FaGetPocket className="h-7 w-7" />}
            title="Retrieve Authors"
            subtitle="Authors List"
            linkTo="/authors/list"
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default Authors;