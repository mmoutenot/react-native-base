/*eslint-disable react/prop-types*/

import React from 'react';

import HomeView from './home/HomeView';


/**
 * AppRouter is responsible for mapping a navigator scene to a view
 */
export default function AppRouter(props) {
  const key = props.scene.route.key;

  switch (key) {
    case 'HomeTab_Index': {
      return <HomeView />;
    }
    case 'Counter': {
      return <HomeView />;
    }

  }

  throw new Error('Unknown navigation key: ' + key);
}
