/*eslint-disable */
import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HelloWorld from './HelloWorld';


class App extends React.Component {
  render() {
    return (

        <BrowserRouter>
          <Routes>
            <Route path='/' element={'Home!'} />
            <Route path='/hello' element={<HelloWorld greeting='Friend' />} />
          </Routes>
        </BrowserRouter>

    );
  }
}

export default App;
