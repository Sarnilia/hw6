import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deletePhotoQuery } from '../../../redux/actionCreators/photosAC'
// import { usePhotosContext } from '../Photos'

function PhotoItem({
  id, url, description, title,
}) {
  const dispatch = useDispatch()

  const deleteHandler = () => {
    dispatch(deletePhotoQuery(id))
  }

  return (
    <div className="card mb-3" style={{ width: '300px' }}>

      <Link to={`/photos/${id}`}>
        <img src={url} className="card-img-top" alt={url} />
      </Link>
      <div className="card-body p-1 d-flex flex-column">
        <div className="card p-1" style={{ textAlign: 'left' }}>{title}</div>
        <div className="card p-1 mb-2" style={{ textAlign: 'left' }}>{description}</div>
        <button data-action={`${id}`} onClick={deleteHandler} type="button" className="btn btn-danger">Delete</button>
      </div>
    </div>
  )
}

export default PhotoItem
