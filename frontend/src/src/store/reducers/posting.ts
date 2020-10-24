import {
  LOAD_POSTINGS_ERROR,
  LOAD_POSTINGS_LOADING,
  LOAD_POSTINGS_SUCCESS,
  INSERT_POSTING_LOADING,
  INSERT_POSTING_SUCCESS,
  INSERT_POSTING_ERROR,
  UPDATE_POSTING_LOADING,
  UPDATE_POSTING_SUCCESS,
  UPDATE_POSTING_ERROR,
  DELETE_POSTING_LOADING,
  DELETE_POSTING_SUCCESS,
  DELETE_POSTING_ERROR,
} from "store/actionTypes";

const initial_state: PostingState = {
  loading: false,
  error: "",
  postings: [],
};

const postingReducer = (
  state: PostingState = initial_state,
  action: any
): PostingState => {
  switch (action.type) {
    case LOAD_POSTINGS_LOADING: {
      return {
        ...state,
        loading: true,
        error: "",
      };
    }
    case LOAD_POSTINGS_SUCCESS: {
      return {
        ...state,
        postings: action.data.posting.postings,
        loading: false,
      };
    }
    case LOAD_POSTINGS_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    case INSERT_POSTING_LOADING: {
      return {
        ...state,
        loading: true,
        error: "",
      };
    }
    case INSERT_POSTING_SUCCESS: {

      let postings = [
        ...state.postings,
        action.data.posting
      ]

      return {
        postings: postings,
        loading: false,
        error: "",
      };
    }
    case INSERT_POSTING_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    case UPDATE_POSTING_LOADING: {
      return {
        ...state,
        loading: true,
        error: "",
      };
    }
    case UPDATE_POSTING_SUCCESS: {

      return {
        ...state,
        postings: state.postings.map((posting) => {
           if ( posting.id === action.data.posting.id) {
             return action.data.posting
           }

           return posting
         }),
        loading: false,
        error: "",
      };

    }
    case UPDATE_POSTING_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    case DELETE_POSTING_LOADING: {
      return {
        ...state,
        loading: true,
        error: "",
      };
    }
    case DELETE_POSTING_SUCCESS: {

      return {
        ...state,
        postings: state.postings.filter((posting) => {
           if ( posting.id !== action.data) {
             return true
           }

           return false
         }),
        loading: false,
        error: "",
      };

    }
    case DELETE_POSTING_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    default: {
      return state;
    }
  }
};
export default postingReducer;
