import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import PlanetsList from '../pages/PlanetsList';
import PlanetInfo from '../pages/PlanetInfo';

console.log(PlanetsList)

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PlanetsList />,
    children: []
  },
  {
    path: 'planet',
    element: <PlanetInfo />
  }
]);