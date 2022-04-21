import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import Header from './components/Header/Header'
import PageNotFound from './components/404/404'
import Main from './components/Main/Main'
import PhotoDetail from './components/Photos/PhotoDetail/PhotoDetail'
import AddPhotoForm from './components/Forms/PhotoForm/AddPhotoForm/AddPhotoForm'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/photos/:photosId" element={<PhotoDetail />} />
        <Route path="/form" element={<AddPhotoForm />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
