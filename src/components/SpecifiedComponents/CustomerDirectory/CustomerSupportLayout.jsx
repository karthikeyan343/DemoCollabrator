import React from "react";
import Sidebar from "../CustomerDirectory/CustomerHeader";
import CustomerMain from "../SpecifiedComponents/CustomerSupport/CustomerMain";

const CustomerSupportLayout = () => {
  return (
    <div className="grid grid-cols-[256px_1fr] h-screen overflow-hidden">
      <Sidebar />

      <main className="min-w-0 overflow-y-auto">
        <CustomerMain />
      </main>
    </div>
  );
};

export default CustomerSupportLayout;