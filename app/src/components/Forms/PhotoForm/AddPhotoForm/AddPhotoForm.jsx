import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addPhotoQuery } from '../../../../redux/actionCreators/photosAC'

import PhotoFormExample from '../PhotoFormExample/PhotoFormExample'

function AddPhotoForm() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const submitHandler = async (e) => {
    e.preventDefault()

    const formData = Object.fromEntries(new FormData(e.target).entries())

    dispatch(addPhotoQuery(formData, e))
  }

  return (
    <>
      <PhotoFormExample submitHandler={submitHandler} />
      <div className="d-flex flex-column align-items-center mt-3 mb-3">
        <button onClick={() => { navigate('..') }} type="button" className="btn btn-danger">Back</button>
      </div>
    </>
  )
}

export default AddPhotoForm
