
import React from 'react';
import CountryGrid from './components/CountryGrid.jsx';
import './components/CountryGrid.css';
import Navbar from './components/navBar/index.jsx';
import './App.css'
import SearchBox from './components/SearchBox/index.jsx';


function App() {
  return (
    <div>
      <Navbar/>
      <SearchBox/>
      {/* <div className='[d-flex justi-bw align-cente'>
        <SearchBox />
        <Select/>
      </div> */}
      <CountryGrid />
    </div>
    // <div className="App" style={{ backgroundColor: '#2b3743' }}>
    //   <h1>where in the world ?</h1>
    //   <form>
    //     <div className="search-btn">
    //       <input type="text" placeholder="Enter Movie Name"
    //         className="inputText">
    //       </input>
    //       <button><i className="fas fa-search"></i></button>
    //     </div>
    //   </form>
    //   <CountryGrid />
    // </div>
  );
}

export default App;
