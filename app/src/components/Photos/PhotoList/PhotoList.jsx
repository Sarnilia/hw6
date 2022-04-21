import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPhotosQuery } from '../../../redux/actionCreators/photosAC'
import PhotoItem from '../PhotoItem/PhotoItem'

function PhotoList() {
  const photos = useSelector((store) => store.photos)
  const filter = useSelector((store) => store.filter)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setPhotosQuery(filter))
  }, [filter])

  return (
    <div className="d-flex flex-column-reverse align-items-center">
      {photos.map((photo) => <PhotoItem key={photo.id} {...photo} />)}
    </div>
  )
}

export default PhotoList
