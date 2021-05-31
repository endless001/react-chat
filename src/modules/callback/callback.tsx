import {User} from "oidc-client";
import React,{useEffect} from "react";
import userManager from "../../user-manager";
import {push} from 'connected-react-router';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import { Spinner } from "react-bootstrap";

interface CallbackProps {
  dispatch: Dispatch;
}

const Callback = (props: CallbackProps) => {
  const successCallback = (user: User) => {
    console.log(user)
    // get the user's previous location, passed during signinRedirect()
    var redirectPath = user.state.path as string;

   // props.dispatch(push(redirectPath));
  };

  const errorCallback = (error: Error) => {
    console.log(error);
  //  props.dispatch(push('/'));
  };

  useEffect(() => {
    userManager
      .signinRedirectCallback()
      .then(user => successCallback(user))
      .catch(error => errorCallback(error));
  });

  return <Spinner animation="border" />;
};
export default connect()(Callback);
