import {
  ADD_FAVORITE_TV_SHOW,
  REMOVE_FAVORITE_TV_SHOW,
} from "../actions/favoriteTvShowAction";

export const loadState = () => {
  const serializedState = localStorage.getItem("favoriteTvShow");
  if (serializedState === null) {
    return [];
  }
  return JSON.parse(serializedState);
};

const default_favorite_tv_show = {
  favoriteTvShow: loadState(),
};

const favorite_tv_show = (state = default_favorite_tv_show, action) => {
  switch (action.type) {
    case ADD_FAVORITE_TV_SHOW: {
      const getFavoriteTvShow = () => {
        const uniqueFavorite = [...state.favoriteTvShow, action.payload];
        return [...new Set(uniqueFavorite)];
      };

      return {
        ...state,
        favoriteTvShow: getFavoriteTvShow(),
      };
    }
    case REMOVE_FAVORITE_TV_SHOW: {
      return {
        ...state,
        favoriteTvShow: state.favoriteTvShow.filter((elm) => elm !== action.payload)
      }
    }
    default:
      return state;
  }
};


export default favorite_tv_show;
