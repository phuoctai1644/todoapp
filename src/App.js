import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GetStarted from './page/GetStarted/index.js';
import Home from './page/Home'
import DetailGroup from './page/DetailGroup';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/todoapp' element={<GetStarted />} />
          <Route path='/home' element={<Home />} />
          <Route path='/detailGroup' element={<DetailGroup />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
