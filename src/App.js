import './App.css';
import {Route,Routes, useNavigate} from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';

function App() {
  const navigate = useNavigate();
  return (
    <Routes>
      <Route path="/*" element={<MainPage></MainPage>}></Route>
      <Route path="/admin/*" element={<AdminPage></AdminPage>}></Route>
      <Route path="/login" element={<LoginPage></LoginPage>}></Route>
    </Routes>
  );
}

export default App;
