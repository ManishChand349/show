import { Route, Link, Routes } from 'react-router-dom';
import ShowList from './components/ShowList';
import ShowSummary from './components/ShowSummary';

import './App.css';

const App = () => {
  return (

      <div className="App">
      {/* <ShowList/> */}
         <Routes>
        <Route path="/" element={<ShowList/>} />
        <Route path="/show/:id" element={<ShowSummary/>} />
         </Routes>
      </div>

  );
};

export default App;