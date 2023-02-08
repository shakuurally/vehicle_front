import React from "react";

function TableLoader() {
  return (
    <div className="w-screen px-5 text-gray-900 bg-white divide-y divide-gray-200 text-gray-100 bg-gray-500 ">
      <div className="mt-5">
        <div className="w-full h-8 p-4 mb-8 text-base font-normal whitespace-nowrap lg:p-5 loading "></div>
        <div className="w-full h-8 p-4 mb-8 text-base font-normal whitespace-nowrap lg:p-5 loading "></div>
      </div>
    </div>
  );
}

export default TableLoader;
