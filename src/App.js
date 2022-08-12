import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GetStarted from './page/GetStarted/index.js';
import Home from './page/Home'
import DetailGroup from './page/DetailGroup';
import TempPage from './page/TempPage/index.js';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<TempPage />} />
          <Route path='/todoapp' element={<GetStarted />} />
          <Route path='/todoapp/home' element={<Home />} />
          <Route path='/todoapp/detailGroup' element={<DetailGroup />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
