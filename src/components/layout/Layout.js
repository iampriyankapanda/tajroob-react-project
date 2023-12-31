import React from "react";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}