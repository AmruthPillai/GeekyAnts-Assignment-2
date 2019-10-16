import React from 'react';
import Navbar from './layout/Navbar/Navbar';
import Header from './layout/Header/Header';
import Sidebar from './layout/Sidebar/Sidebar';
import Body from './layout/Body/Body';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="spacer" style={{ height: 60 }} />

      <Header />

      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col">
          <Body />
        </div>
      </div>
    </div>
  );
}

export default App;
