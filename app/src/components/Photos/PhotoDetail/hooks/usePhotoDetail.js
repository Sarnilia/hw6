import { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getPhotoQuery, updatePhotoQuery } from '../../../../redux/actionCreators/photosAC'

function usePhotoDetail(closeModal) {
  const { photosId } = useParams()

  const dispatch = useDispatch()

  const controller = useRef(new AbortController())

  const photo = useSelector((store) => store.photos.find((el) => el.id === +photosId)) || {}

  useEffect(() => {
    dispatch(getPhotoQuery(photosId, controller))
  }, [])

  const submitHandler = async (e) => {
    e.preventDefault()

    const formData = Object.fromEntries(new FormData(e.target).entries())

    dispatch(updatePhotoQuery(photosId, formData, closeModal))
  }

  return {
    photo,
    submitHandler,
  }
}

export default usePhotoDetail
