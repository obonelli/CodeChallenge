export const ADD_FAVORITE_TV_SHOW = "ADD_FAVORITE_TV_SHOW";
export const REMOVE_FAVORITE_TV_SHOW = "REMOVE_FAVORITE_TV_SHOW";

const add_favorite_tv_show_action = (id) => {
    return  {
        type: ADD_FAVORITE_TV_SHOW,
        payload: id
    }
};

const remove_favorite_tv_show_action = (id) => {
    return  {
        type: REMOVE_FAVORITE_TV_SHOW,
        payload: id
    }
};

export default {
    add_favorite_tv_show_action,
    remove_favorite_tv_show_action
}
