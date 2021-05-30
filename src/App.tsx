import React from 'react';

import { Button } from 'react-bootstrap';
import  {Menu} from "components/menu/menu";
import 'remixicon/fonts/remixicon.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Chat} from "modules/chat/chat";
import {RenderRoute} from "components/route/route";
import userManager from "./user-manager";

function App() {


  return (
     <RenderRoute/>
  );
}

export default App;
