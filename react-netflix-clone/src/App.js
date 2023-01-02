import './App.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { Outlet, Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage/Index'
import DetailPage from './pages/DetailPage/Index'
import SearchPage from './pages/SearchPage/Index'

const Layout = () => {
  return(
    <div>
      <Nav />

      <Outlet />

      <Footer />
    </div>
  )
}

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Layout/ >}>
          <Route index element={<MainPage />}></Route>
          <Route path=':movieId' element={<DetailPage/>}></Route>
          <Route path='search' element={<SearchPage/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
