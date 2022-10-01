import {
  ADD_TASK,
  DELETE_TASK,
  SET_INITIAL_LIST,
  STATUS_CHANGE_TASK,
} from "./../utils/constants";
export default (state, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ADD_TASK: {
      return { ...state, list: [...state.list, payload] };
    }
    case STATUS_CHANGE_TASK: {
      return {
        ...state,
        list: state.list.map((i) =>
          i.id === payload.id ? { ...i, status: payload.nextStatus } : i
        ),
      };
    }
    case SET_INITIAL_LIST: {
      return { ...state, list: payload };
    }
    case DELETE_TASK: {
      console.log(state.list.filter((i) => i.id !== payload));
      return { ...state, list: state.list.filter((i) => i.id !== payload) };
    }
    default:
      return state;
  }
};
