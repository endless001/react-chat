import React from "react";
import UserLayout from "layouts/user-layout";
import BasicLayout from "layouts/basic-layout";
import Callback from "modules/callback/callback";
import NotFound from "modules/not-found/not-found";
import {Authenticated} from "../authenticated/authenticated";


export const routes = [
  {
    path: '/',
    element:  Authenticated(<BasicLayout/>),
    children: []
  },
  {
    path: 'user',
    element: <UserLayout/>,
    children: [
    {path: '/callback', element:<Callback/>}
  ]
  },
  { path: 'home', redirectTo: '/' },
  { path: '*', element:<NotFound/> }
];



