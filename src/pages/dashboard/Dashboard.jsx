import React from 'react';
import Widget from '../../components/zWidget';
import MainLayout from '../../Layouts/MainLayout'
import { FaUsers, FaBuilding, FaList, FaCopy, FaProjectDiagram, FaPen } from "react-icons/fa";

function Dashboard() {

  return (
    <MainLayout>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 p-4">
        <Widget
          icon={<FaProjectDiagram className="h-7 w-7" />}
          title="Projects Data"
          subtitle="View Projects"
          linkTo="/projects"
        />
        <Widget
          icon={<FaUsers className="h-7 w-7" />}
          title="User Managment"
          subtitle="View Users"
          linkTo="/users"
        />
        <Widget
          icon={<FaCopy className="h-7 w-7" />}
          title="Blogs Data"
          subtitle="View Blogs"
          linkTo="/blogs"
        />
        <Widget
          icon={<FaList className="h-7 w-7" />}
          title="Services Offered"
          subtitle="View Services"
          linkTo="/services"
        />
        <Widget
          icon={<FaBuilding className="h-7 w-7" />}
          title="Company Informations"
          subtitle="View Company info"
          linkTo="/companyinfo"
        />
        <Widget
          icon={<FaPen className="h-7 w-7" />}
          title="Authers Management"
          subtitle="View Authers"
          linkTo="/authers"
        />
      </div>
    </MainLayout>
  );
}

export default Dashboard;
