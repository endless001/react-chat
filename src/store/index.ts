import { configureStore } from "@reduxjs/toolkit";
import {loadUser, reducer as oidcReducer} from 'redux-oidc';
import { routerMiddleware } from 'react-router-redux'
import userManager from "user-manager";
import { browserHistory } from 'react-router'

export const rootReducer = {
  oidc: oidcReducer,
};

const middleware = routerMiddleware(browserHistory)
export const store = configureStore({
  reducer: rootReducer,
  middleware: [middleware]
});


loadUser(store, userManager);




export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;



