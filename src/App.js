import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu/Menu';
import AppRouter from './components/Routers/AppRouter';
import {BrowserRouter} from 'react-router-dom'
import {AuthProvider} from './components/Providers/AuthProvider';
import ContactUs from './components/ContactUs/ContactUs';

function App() {
  return (
    
    <BrowserRouter>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;