import React from "react";
import MainLayout from "../../Layouts/MainLayout";
import Widget from "../../components/zWidget";
import { FaGetPocket, FaPlus } from "react-icons/fa";

const Users = () => {

  return (
    <MainLayout>
      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 p-4">
          <Widget
            icon={<FaPlus className="h-7 w-7" />}
            title="New User"
            subtitle="Create Users"
            linkTo="/users/newuser"
          />
          <Widget
            icon={<FaGetPocket className="h-7 w-7" />}
            title="Retrieve User"
            subtitle="Users List"
            linkTo="/users/list"
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default Users;