import React from "react";

function Button({ title }) {
  return (
    <div>
          <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-4 w-full rounded-lg"
              type="submit"
            >
             {title}
            </button>
    </div>
  );
}

export default Button;
