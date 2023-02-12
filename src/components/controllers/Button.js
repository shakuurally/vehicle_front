import React from "react";

function Button({ title , bg}) {
  return (
    <div>
          <button
              className={`${bg}  text-white font-bold py-4 px-4 w-full rounded-lg `}
              type="submit"
            >
             {title}
            </button>
    </div>
  );
}

export default Button;
