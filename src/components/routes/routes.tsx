import React from "react";
import {Authenticated} from "components/authenticated/authenticated";

export const routes = [
  {
    path: '/',
    element: import("layouts/user-layout"),
    children: []
  },
  {
    path: 'user',
    element: import("layouts/basic-layout"),
    children: [
    {path: '/callback', element:Authenticated(React.lazy(() =>import("modules/callback/callback")))}
  ]
  },
  { path: 'home', redirectTo: '/' },
  { path: '*', element:React.lazy(() =>import("modules/not-found/not-found")) }
];



