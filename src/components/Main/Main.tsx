//React+Redux
import React from 'react';
//Router
import { Routes } from '../Router'
// Стили
import './main.sass';

export function Main() {
  return (
    <main className="main">
      <div className="content-container">
        <Routes />
      </div>
    </main>
  );
}