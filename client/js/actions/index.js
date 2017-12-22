import "isomorphic-fetch";

export const fetchNewKitten = (category) => dispatch => {
    //add loading message
    dispatch(loadingKitten());
    var url = `http://thecatapi.com/api/images/get?format=src&type=gif&category=`;
    url = url + category;
    setTimeout(() => dispatch(fetchKitten(url)), 500);

};
export const FETCH_NEW_KITTEN = "FETCH_NEW_KITTEN";
export const fetchKitten = (kitten) => ({
    type: FETCH_NEW_KITTEN,
    kitten
});
export const LOADING_KITTEN = "LOADING_KITTEN";
export const loadingKitten = () => ({
    type: LOADING_KITTEN
});
