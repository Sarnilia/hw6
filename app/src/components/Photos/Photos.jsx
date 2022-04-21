import { useDispatch } from 'react-redux'
import {
  createContext, useEffect, useContext,
} from 'react'
import { setPhotosQuery } from '../../redux/actionCreators/photosAC'
import PhotoList from './PhotoList/PhotoList'
import SearchPhotoForm from './SearchPhotoForm/SearchPhotoForm'

const PhotoContext = createContext()

function Photos() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setPhotosQuery())
  }, [])

  return (
    <>
      <SearchPhotoForm />
      <hr />
      <PhotoList />
    </>
  )
}

export default Photos

const usePhotosContext = () => useContext(PhotoContext)

export {
  PhotoContext,
  usePhotosContext,
}
