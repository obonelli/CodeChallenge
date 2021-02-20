import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-modal";
import Search from "./Search";
import Show from "./Show";
import "./styles/main.css";

import favoriteTvShowAction from "../redux/actions/favoriteTvShowAction";

Modal.setAppElement("#root");

function TvShows() {
  const url = "http://api.tvmaze.com/shows?page=0";
  const urlSearch = "http://api.tvmaze.com/search/shows?q=";
  const urlSearchFavorite = "http://api.tvmaze.com/shows/";

  const [listTvShows, setListTvShows] = useState();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [dataModal, setDataModal] = useState();
  const [isShowFavoriteShows, setIsShowFavoriteShows] = useState(false);

  function openModal(show) {
    setDataModal(show);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const fetchTvShows = async () => {
    const res = await fetch(url);
    const resJSON = await res.json();
    setListTvShows(resJSON);
  };

  const fetchSearchTvShows = async (param) => {
    const res = await fetch(urlSearch + param);
    const resJSON = await res.json();
    setListTvShows(resJSON.map((elm) => elm.show));
  };

  const fetchSearchFavoriteTvShow = async (param) => {
    const res = await fetch(urlSearchFavorite + param);
    const resJSON = await res.json();
    setListTvShows((listTvShows) => [...listTvShows, resJSON]);
  };

  const listFavoriteTv = () => {
    setListTvShows([]);
    favorite.map((elm) => {
      return fetchSearchFavoriteTvShow(elm);
    });
  };

  const handleListTvShows = (param) => {
    if (param === "") {
      fetchTvShows();
    } else {
      fetchSearchTvShows(param);
    }
  };

  useEffect(() => {
    fetchTvShows();
  }, []);

  const dispatch = useDispatch();

  const favorite = useSelector(
    (state) => state.favorite_tv_show.favoriteTvShow
  );

  const saveFavorite = () => {
    const serializedState = JSON.stringify(favorite);
    localStorage.setItem("favoriteTvShow", serializedState);
  };

  return (
    <div className="rounded-t-xl overflow-hidden bg-gradient-to-r from-indigo-50 to-indigo-100 px-6 py-8">
      <h1 className="text-xl my-2 font-bold">My TV Shows</h1>
      <Search handleListTvShows={handleListTvShows} />
      <div className="flex items-center mx-auto justify-center mb-4">
        {isShowFavoriteShows ? (
          <button
            onClick={() => {
              fetchTvShows();
              setIsShowFavoriteShows(false);
            }}
            className="bg-green-300 p-2 text-gray-900 hover:bg-green-500 hover:text-gray-100 font-bold py-2 px-4 rounded inline-flex items-center mr-2"
          >
            <svg
              className="w-4 h-4 mr-2"
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
            <span>View all</span>
          </button>
        ) : (
          <button
            onClick={() => {
              listFavoriteTv();
              setIsShowFavoriteShows(true);
            }}
            className="bg-green-300 p-2 text-gray-900 hover:bg-green-500 hover:text-gray-100 font-bold py-2 px-4 rounded inline-flex items-center mr-2"
          >
            <svg
              className="w-4 h-4 mr-2"
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
            <span>View Favorites</span>
          </button>
        )}

        <button
          onClick={saveFavorite}
          className="bg-green-300 p-2 text-gray-900 hover:bg-green-500 hover:text-gray-100 font-bold py-2 px-4 rounded inline-flex items-center"
        >
          <svg
            className="w-4 h-4 mr-2"
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
          <span>Save</span>
        </button>
      </div>
      <ul>
        {!listTvShows
          ? "Cargando..."
          : listTvShows.map((show) => (
              <Show show={show} openModal={openModal} key={show.id} />
            ))}
      </ul>

      <Modal
        className="bg-transparent border-transparent"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Tv Show Modal"
        dialogClassName=""
      >
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="bg-white px-4 pt-2 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"></div>
                  {dataModal ? (
                    <div className="w-full">
                      <button
                        className="border-2 border-transparent bg-red-500 ml-3 py-2 px-4 font-bold 
                      uppercase text-white rounded-full transition-all hover:border-red-500 hover:bg-transparent hover:text-red-500 float-right"
                        onClick={closeModal}
                      >
                        X
                      </button>
                      <div className="text-center mt-11">
                        <h3 className="text-2xl font-bold mb-5">
                          {dataModal.name}
                        </h3>
                        {favorite.includes(dataModal.id) ? (
                          <button
                            className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 
                            hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none 
                            focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 mb-5"
                            onClick={() =>
                              dispatch(
                                favoriteTvShowAction.remove_favorite_tv_show_action(
                                  dataModal.id
                                )
                              )
                            }
                          >
                            Remove favorite
                          </button>
                        ) : (
                          <button
                            className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 
                            hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none 
                            focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 mb-5"
                            onClick={() =>
                              dispatch(
                                favoriteTvShowAction.add_favorite_tv_show_action(
                                  dataModal.id
                                )
                              )
                            }
                          >
                            Add favorite
                          </button>
                        )}
                        <div>
                          <img
                            className="inline-block h-48 w-full object-cover md:w-48"
                            src={dataModal.image ? dataModal.image.medium : "#"}
                            alt="Cant find this item at a store"
                          ></img>
                        </div>
                        <div className="text-left mt-2 text-gray-500">
                          <p className="">
                            <span>Summary: </span>
                            <strong dangerouslySetInnerHTML={{ __html: dataModal.summary }}></strong>
                          </p>

                          {dataModal.externals.imdb ? (
                            <p className="">
                              <span>Externals: </span>
                              <a
                                href={
                                  "https://www.imdb.com/title/" +
                                  dataModal.externals.imdb
                                }
                                target="_blank"
                              >
                                {"https://www.imdb.com/title/" +
                                  dataModal.externals.imdb}
                              </a>
                            </p>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default TvShows;
