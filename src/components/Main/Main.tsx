//React+Redux
import React, { FC } from 'react';
//Router
import { Routes } from '../Router'
// Стили
import './main.sass';

export const Main: FC = () => {
  return (
    <main className="main">
      <div className="content-container">
        <Routes />
      </div>
    </main>
  );
}