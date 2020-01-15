import React from 'react';
import { SimpleContainer } from './display/Display';
import Drawer from './display/Drawer';
import BottomNav from './components/display/BottomNav'

function App() {
  return (
    <div>
      <Drawer />
      <SimpleContainer />
      <BottomNav />
    </div>
  );
}

export default App;
