import React from "react";
import Layout from "../../components/layout/Layout";
import PageHeader from "../../components/common/page-header/PageHeader";
import Tabs from "../../components/all-experience/tabs/Tabs";

export default function AllExperience() {
  const PageHeaderObj = {
    title: 'Online Experiences',
    subTitle: 'Find people with unique experiences and activities - all without leaving home',
  };
  return (
    <Layout>
      <PageHeader commonObj={PageHeaderObj} />
      <Tabs />
    </Layout>
  );
}