'use client'
import React, { ReactNode } from "react";
import Header from "./Header";
import Dashboard from "./Dashboard";
import "@/css/Layout.css";

interface LayoutProps {
  children: ReactNode;
}

const index: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Dashboard>{children}</Dashboard>
    </>
  );
};

export default index;
