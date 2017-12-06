import 'isomorphic-fetch';

export const fetchNewKitten = (category) => dispatch => {
    var url = `https://thecatapi.com/api/images/get?format=src&category=`;
    url = url + category;
    return fetch(url)
    .then(res=> {dispatch(fetchKitten(res.url));});
};
export const FETCH_NEW_KITTEN = 'FETCH_NEW_KITTEN';
export const fetchKitten = (kitten) => ({
    type: FETCH_NEW_KITTEN,
    kitten
});
