import React from "react";
import {BasicLayout} from "layouts/basic-layout";
import {UserLayout} from "layouts/user-layout";

import Callback from "modules/callback/callback";
import {NotFound} from "modules/not-found/not-found";

export const routes = [
  {
    path: '/',
    element: <BasicLayout/>,
    children: []
  },
  {
    path: 'user',
    element: <UserLayout/>,
    children: [
    {path: '/callback', element: <Callback/>}
  ]
  },
  { path: 'home', redirectTo: '/' },
  { path: '*', element: <NotFound /> }
];



