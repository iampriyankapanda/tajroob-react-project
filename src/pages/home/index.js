import React from "react";
import Layout from "../../components/layout/Layout";
import ShareExperience from "../../components/share-experience/ShareExperience";

export default function Home() {
  const shareExperienceObj = {
    border: 'red-border',
    title: 'Share your experience and earn money',
    imgUrl: 'share-experience'
  };

  return (
    <Layout>
      <ShareExperience commonObj={shareExperienceObj} />
    </Layout>
  );
}