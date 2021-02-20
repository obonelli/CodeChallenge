import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import favoriteTvShowAction from "../redux/actions/favoriteTvShowAction";

function Show(props) {
  const favorite = useSelector(
    (state) => state.favorite_tv_show.favoriteTvShow
  );

  const dispatch = useDispatch();

  const handleOpenModal = () => {
    props.openModal(props.show);
  };

  return (
    <li className="pb-4">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow overflow-hidden md:max-w-2xl hover:shadow-lg transition duration-300 ease-in-out">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:w-48"
              src={props.show.image ? props.show.image.medium : "#"}
              alt="Cant find this item at a store"
            ></img>
          </div>
          <div className="px-8 pb-8 pt-4">
            <div className="uppercase tracking-wide text-lg text-black font-semibold">
              <p
                className="flex underline cursor-pointer"
                onClick={handleOpenModal}
              >
                {props.show.name} - {props.show.id}{" "}
                {favorite.includes(props.show.id) ? (
                  <svg
                    className="w-4 h-4 mr-2 mt-1.5"
                    role="img"
                    height="511pt"
                    viewBox="0 -10 511.98685 511"
                    width="511pt"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m510.652344 185.902344c-3.351563-10.367188-12.546875-17.730469-23.425782-18.710938l-147.773437-13.417968-58.433594-136.769532c-4.308593-10.023437-14.121093-16.511718-25.023437-16.511718s-20.714844 6.488281-25.023438 16.535156l-58.433594 136.746094-147.796874 13.417968c-10.859376 1.003906-20.03125 8.34375-23.402344 18.710938-3.371094 10.367187-.257813 21.738281 7.957031 28.90625l111.699219 97.960937-32.9375 145.089844c-2.410156 10.667969 1.730468 21.695313 10.582031 28.09375 4.757813 3.4375 10.324219 5.1875 15.9375 5.1875 4.839844 0 9.640625-1.304687 13.949219-3.882813l127.46875-76.183593 127.421875 76.183593c9.324219 5.609376 21.078125 5.097657 29.910156-1.304687 8.855469-6.417969 12.992187-17.449219 10.582031-28.09375l-32.9375-145.089844 111.699219-97.941406c8.214844-7.1875 11.351563-18.539063 7.980469-28.925781zm0 0"
                      fill="#ffc107"
                    />
                  </svg>
                ) : (
                  ""
                )}
              </p>
            </div>
            <div>
              <p className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                {favorite.includes(props.show.id) ? (
                  <button
                    className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
                    onClick={() =>
                      dispatch(
                        favoriteTvShowAction.remove_favorite_tv_show_action(
                          props.show.id
                        )
                      )
                    }
                  >
                    Remove favorite
                  </button>
                ) : (
                  <button
                    className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
                    onClick={() =>
                      dispatch(
                        favoriteTvShowAction.add_favorite_tv_show_action(
                          props.show.id
                        )
                      )
                    }
                  >
                    Add favorite
                  </button>
                )}
              </p>
            </div>

            <div className="text-left mt-2 text-gray-500">
              <p className="">
                <span>Language: </span>
                <strong className="">{props.show.language}</strong>
              </p>
              <p className="">
                <span>Genres: </span>
                <strong className="">{props.show.genres}</strong>
              </p>
              <p className="flex-1">
                <span className="">Status: </span>
                <strong className="">{props.show.status}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-4"></div>
    </li>
  );
}

export default Show;
