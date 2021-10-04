import * as reducer from "../reducer";

const { articlesReducer, REQUEST_STATUS } = reducer;

describe("articles reduce", () => {
  it("returns state with status pending after getArticles action", () => {
    const expected = {
      list: [],
      request: { error: null, status: REQUEST_STATUS.PENDING },
    };
    const received = reducer(undefined, articlesReducer());
    expect(received).toEqual(expected);
  });
});
