import React from "react";
import {Menu} from "components/menu/menu";
import {Chat} from "modules/chat/chat";
import {Outlet} from "react-router-dom";

const BasicLayout=()=> {
  return (
      <div className="layout-wrapper d-lg-flex">
        <Menu/>
          <Outlet />
        <Chat/>
      </div>
  )
}

export  default  BasicLayout;