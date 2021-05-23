import React from 'react';

import { Button } from 'react-bootstrap';
import  {Menu} from "components/menu/menu";
import 'remixicon/fonts/remixicon.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {TabPane} from "components/tab-pane/tab-pane";
import {Chat} from "components/chat/chat";

function App() {
  return (
    <div className="layout-wrapper d-lg-flex">
     <Menu/>
    <TabPane/>
    <Chat/>
    </div>
  );
}

export default App;
