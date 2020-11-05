export default (state, action) => {
  switch (action.type) {
    case 'SET_NEWS':
      return {
        ...state,
        news: action.payload.articles,
        totalResult: action.payload.totalResults,
      };

    case 'CLEAR_NEWS':
      return {
        ...state,
        news: [],
      };

    case 'SET_SEARCH':
      return {
        ...state,
        search: action.payload,
      };

    case 'SUBMIT_HANDLE':
      return {
        ...state,
        qString: {
          ...state.qString,
          q: action.payload,
        },
      };

    case 'BUTTON_HANDLE':
      const btn = `&q=${action.payload}`;
      return {
        ...state,
        qString: {
          ...state.qString,
          category: action.payload.slice(1),
        },
      };

    case 'PAGE_HANDLE':
      return {
        ...state,
        currentPage: action.payload,
      };

    case 'PAGE_SUBMIT_HANDLER':
      return {
        ...state,
        qString: {
          ...state.qString,
          page: action.payload,
        },
      };

    case 'PREV_HANDLE':
      return {
        ...state,
        qString: {
          ...state.qString,
          page: state.qString.page - 1,
        },
      };

    case 'NEXT_HANDLE':
      return {
        ...state,
        qString: {
          ...state.qString,
          page: state.qString.page + 1,
        },
      };
    default:
      return state;
  }
};
