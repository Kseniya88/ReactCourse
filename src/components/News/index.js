import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../Store/Articles/actions";
import {
  selectArticles,
  selectArticlesError,
  selectArticlesLoading,
} from "../Store/Articles/selectors";
import "./../../App.scss";

export const News = () => {
  const dispatch = useDispatch();

  const error = useSelector(selectArticlesError);
  const loading = useSelector(selectArticlesLoading);
  const articles = useSelector(selectArticles);

  const reload = () => {
    dispatch(getArticles());
  };

  useEffect(() => {
    reload();
  }, []);

  return (
    <div>
      <h2>NEWS</h2>
      {error ? (
        <>
          <h3>{error}</h3>
          <Button variant="primary" onClick={reload}>
            Refresh
          </Button>
        </>
      ) : (
        articles.map((art) => (
          <article key={art.id}>
            <h4>{art.title}</h4>
          </article>
        ))
      )}
      {loading && <Spinner animation="border" />}
    </div>
  );
};
