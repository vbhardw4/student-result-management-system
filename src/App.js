import React from 'react';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';

const App = () => {
  return (
   <div>
     <Provider store={store}>
    <Navbar/>
    </Provider>
   </div>
  );
};

export default App;
