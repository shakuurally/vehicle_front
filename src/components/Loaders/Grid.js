import React from "react";

function Grid() {
  return (
    <div className="grid grid-cols-1 gap-10 mb-6 mt-5 w-full md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">      <div className="w-full mb-8 h-12 loading"></div>
      <div className="w-full p-4 h-20 loading"></div>
      <div className="w-full p-4 h-20 loading"></div>
    </div>
  );
}

export default Grid;
