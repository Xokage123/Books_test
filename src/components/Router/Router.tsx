import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import BookFull from '../Main/Book/Book'
import BooksList from '../Main/BooksList/BooksList'


interface IRouter {
  link: string;
  exact?: boolean;
  element: any;
}

const routerInfo: Array<IRouter> = [
  {
    link: "/",
    exact: true,
    element: BooksList
  },
  {
    link: "/book/:id",
    element: BookFull
  }
]

export function Routes() {  
  return (
    <Switch>
      {
        routerInfo.map((element, index)=> {
          return (
            <Route key={index} exact={element.exact} component={element.element} path={element.link}></Route>
          )
        })
      }
      <Redirect to="/" />
    </Switch>
  );
}
