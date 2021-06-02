import React from "react";
import {Menu} from "components/menu/menu";
import {Chat} from "modules/chat/chat";
import {Outlet} from "react-router-dom";
import userManager from "../user-manager";

const BasicLayout=()=> {
    userManager.getUser().then(function (user) {
        if (!user) {
            userManager.signinRedirect().then(function () {

            }).catch(function (error) {

            });
        }

    });
  return (
      <div className="layout-wrapper d-lg-flex">
        <Menu/>
          <Outlet />
        <Chat/>
      </div>
  )
}

export  default  BasicLayout;