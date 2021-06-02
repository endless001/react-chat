import {User} from "oidc-client";
import React,{useEffect} from "react";
import userManager from "user-manager";
import {push} from 'connected-react-router';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {CallbackComponent} from "redux-oidc";
import {AppDispatch} from "store";

interface CallbackProps {
  dispatch: AppDispatch;
}

const Callback = (props: CallbackProps) => {
  return (<CallbackComponent
      userManager={userManager}
      successCallback={() =>
      {
          props.dispatch(push("/"))
      }}
      errorCallback={error => {
          console.error(error);
      }}
  >
    <div>Redirecting...</div>
  </CallbackComponent>);
};
export default connect()(Callback);
