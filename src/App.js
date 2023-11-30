import { Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import ListTask from './components/ListTask';
import Aside from './components/Aside';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/todo' element={<> <Aside/> <ListTask/> </>} />      
      </Routes>
    </div>
  );
}

export default App;
