import React from "react";
import {Menu} from "components/menu/menu";
import {RenderRoute} from "components/route/route";
import {Chat} from "modules/chat/chat";

const BasicLayout=()=>{
  return(
    <div className="layout-wrapper d-lg-flex">
    <Menu/>
    <RenderRoute/>
    <Chat/>
  </div>
  )
}
