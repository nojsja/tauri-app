import { combineReducers } from "redux";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../../types";
import countReducer from "./count";

const appReducer = combineReducers({
  count: countReducer,
});

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default appReducer;
