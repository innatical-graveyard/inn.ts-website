import "../styles/docs.scss";
import Sidebar from "./Sidebar";
import React from "react";

const Layout: React.FC<{}> = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex flex-col gap-2 p-5 content overflow-y-auto h-screen">
        {children}
      </div>
    </div>
  );
};

export default Layout;
