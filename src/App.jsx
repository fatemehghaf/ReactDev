import React from 'react'
import ToDo from './components/ToDo'
import { Provider } from 'react-redux';
import {store} from './store/store'

function App() {
  return (
    <div>
      <Provider store={store}>
      <ToDo/>
      </Provider>
      
    </div>
  )
}

export default App
