import React from "react";

function Button({ handleClick, content }) {
  return (
    <button
      type="button"
      onClick={handleClick}
      className="w-auto max-w-xs py-2 px-4 my-5 bg-orange-500 text-zinc-100 font-semibold hover:bg-orange-700 rounded-md transition-colors"
    >
      {content}
    </button>
  );
}

export default Button;
