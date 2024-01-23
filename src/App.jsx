import { Outlet } from 'react-router-dom';
import './App.css'
import HeaderJSX from './components/Header'
import FooterJSX from './components/Footer'

function App() {
  return (
    <>
      <HeaderJSX />
      <Outlet />
      <FooterJSX />
    </>
  )
}

export default App;
