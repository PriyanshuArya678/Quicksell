import { useEffect, useState } from 'react'
import axios from 'axios'
import Display from './Display/Display.jsx';
import Body from './Body/Body.jsx';
import { Provider } from 'react-redux';
import { store } from './store/Store.js';
function App() {
  return (
    <Provider store={store}>
      <Display/>
      <Body/>
    </Provider>
  )
}

export default App
