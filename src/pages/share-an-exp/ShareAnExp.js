import React from "react";
import Layout from "../../components/layout/Layout";
import ShareExperience from "../../components/share-experience/ShareExperience";
import PageHeader from "../../components/common/page-header/PageHeader";
import Accordian from "../../components/share-an-exp/accordian/Accordian";

export default function ShareAnExp() {
  const ambassadorObj = {
    border: 'green-border',
    title: 'Become an Ambassador and earn money',
    imgUrl: 'ambasador-image',
  };
  const PageHeaderObj = {
    title: 'Share your experience and earn money',
    subTitle: 'Join a community of people bringing the world together in a whole new way.',
  };
  return (
    <Layout>
      <PageHeader commonObj={PageHeaderObj} />
      <Accordian />
      <ShareExperience commonObj={ambassadorObj} />
    </Layout>
  );
}
