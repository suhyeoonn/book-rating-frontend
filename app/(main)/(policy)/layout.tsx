import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="privacy-policy my-2 rounded-xl border p-10">{children}</div>
  );
};

export default Layout;
