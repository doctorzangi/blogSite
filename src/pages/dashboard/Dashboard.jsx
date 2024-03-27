import React from 'react';
import Widget from '../../components/zWidget';
import MainLayout from '../../Layouts/MainLayout'
import { FaAddressCard, FaEnvelope, FaUsers, FaChartBar } from "react-icons/fa";

function Dashboard() {

  return (
    <MainLayout>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 p-4">
        <Widget
          icon={<FaAddressCard className="h-7 w-7" />}
          title="Projects Data"
          subtitle="Projects"
          linkTo="/projects"
        />
        <Widget
          icon={<FaEnvelope className="h-7 w-7" />}
          title="7 Active services"
          subtitle="Services"
          linkTo="/dashboard/card2"
        />
        <Widget
          icon={<FaUsers className="h-7 w-7" />}
          title="Blogs"
          subtitle="New Blog"
          linkTo="/blogs/newblog"
        />
        <Widget
          icon={<FaChartBar className="h-7 w-7" />}
          title="240+ Active users"
          subtitle="User Management"
          linkTo="/dashboard/card4"
        />
      </div>
    </MainLayout>
  );
}

export default Dashboard;
