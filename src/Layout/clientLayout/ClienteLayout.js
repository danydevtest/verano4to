import React from "react";

function ClienteLayout({children}) {
  return (
    <div className="container-fluid">
      <Menu />
      {children}
    </div>
  );
}

export default ClienteLayout;
