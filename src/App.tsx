import React from 'react';

import { Button } from 'react-bootstrap';
import  {Menu} from "components/menu/menu";
import 'remixicon/fonts/remixicon.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Chat} from "components/chat/chat";
import {RenderRoute} from "components/route/route";

function App() {
  return (
    <div className="layout-wrapper d-lg-flex">
     <Menu/>
     <RenderRoute/>
    <Chat/>
    </div>
  );
}

export default App;
