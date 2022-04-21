import {
  ADD_PHOTO, DELETE_PHOTO, SET_PHOTOS, UPDATE_PHOTO,
} from '../types/photoTypes'

const setPhotos = (newPhotosArray) => ({
  type: SET_PHOTOS,
  payload: newPhotosArray,
})

export const setPhotosQuery = (filter = '') => async (dispatch) => {
  const response = await fetch(`http://localhost:3001/api/v1/photos/?${filter}`)
  const dataFromServer = await response.json()
  dispatch(setPhotos(dataFromServer))
}

const deletePhoto = (id) => ({
  type: DELETE_PHOTO,
  payload: id,
})

export const deletePhotoQuery = (id) => async (dispatch) => {
  const response = await fetch(`http://localhost:3001/api/v1/photos/${id}`, {
    method: 'DELETE',
  })
  if (response.status === 200) {
    dispatch(deletePhoto(id))
  }
}

const updatePhoto = (newPhotoObject) => ({
  type: UPDATE_PHOTO,
  payload: newPhotoObject,
})

export const updatePhotoQuery = (id, formData, closeModal) => async (dispatch) => {
  const response = await fetch(`http://localhost:3001/api/v1/photos/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })

  if (response.status === 200) {
    const updatedPhotoFromServer = await response.json()
    dispatch(updatePhoto(updatedPhotoFromServer))
    closeModal()
  } else {
    alert('Wrong data')
  }
}

const addPhoto = (newPhotoObject) => ({
  type: ADD_PHOTO,
  payload: newPhotoObject,
})

export const addPhotoQuery = (formData, e) => async (dispatch) => {
  const response = await fetch('http://localhost:3001/api/v1/photos/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })

  if (response.status === 201) {
    const addedPhotoFromServer = await response.json()
    dispatch(addPhoto(addedPhotoFromServer))
    e.target.reset()
  } else {
    alert('Wrong data')
  }
}

export const getPhotoQuery = (id, controller) => async (dispatch) => {
  const response = await fetch(`http://localhost:3001/api/v1/photos/${id}`)
  const photoFromServer = await response.json()
  dispatch(updatePhoto(photoFromServer))
  return () => { controller.current.abort() }
}
