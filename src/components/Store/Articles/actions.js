import { PUBLIC_URL } from "../../Utils/constants";

export const GET_ARTICLES_PENDING = "ARTICLES::GET_PENDING";
export const GET_ARTICLES_SUCCESS = "ARTICLES::GET_SUCCESS";
export const GET_ARTICLES_FAILURE = "ARTICLES::GET_FAILURE";

const getArticlesPending = () => ({
  type: GET_ARTICLES_PENDING,
});

const getArticlesSuccess = (articles) => ({
  type: GET_ARTICLES_SUCCESS,
  payload: articles,
});

const getArticlesFailure = (error) => ({
  type: GET_ARTICLES_FAILURE,
  payload: error,
});

export const getArticles = () => (dispatch) => {
  dispatch(getArticlesPending());

  fetch(PUBLIC_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error ${response.status}`);
      }
      return response.json();
    })
    .then((result) => {
      dispatch(getArticlesSuccess(result));
    })
    .catch((err) => {
      dispatch(getArticlesFailure(err.message));
    });
};
