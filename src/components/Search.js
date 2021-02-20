import React from "react";
import "./scripts/ScriptInput.js";

function Search(props) {
  const searching = (event) => {
    const value = event.target.value;
    props.handleListTvShows(value);
  };

  return (
    <div className="max-w-md mx-auto overflow-hidden md:max-w-min">
      <div className="md:flex w-full">
        <div className="mb-4 relative w-1/4">
          <input
            className="input border border-gray-400 appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus 
  focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
            id="Searching"
            type="text"
            autoFocus
            onChange={searching}
          />
          <label
            htmlFor="Searching"
            className="label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-400 text-base mt-2 cursor-text"
          >
            Searching..
          </label>
        </div>
      </div>
    </div>
  );
}

export default Search;
