import "isomorphic-fetch";

export const fetchNewKitten = (category) => dispatch => {
    //add loading message
    dispatch(loadingKitten());
    var url = `https://thecatapi.com/api/images/get?format=src&category=`;
    url = url + category;
    return fetch(url)
    //add new kitten src
    .then(res=> {dispatch(fetchKitten(res.url));});
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
