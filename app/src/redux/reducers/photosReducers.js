import {
  ADD_PHOTO,
  DELETE_PHOTO, SET_PHOTOS, UPDATE_PHOTO,
} from '../types/photoTypes'

// eslint-disable-next-line default-param-last
const photosReducer = (store = [], action) => {
  switch (action.type) {
    case SET_PHOTOS:
      return action.payload

    case DELETE_PHOTO:
      return store.filter((photo) => photo.id !== action.payload)

    case UPDATE_PHOTO:
      return store.length
        ? store.map((photo) => {
          if (photo.id === action.payload.id) {
            return action.payload
          }
          return photo
        }) : [action.payload]

    case ADD_PHOTO:
      return [...store, action.payload]

    default:
      return store
  }
}

export default photosReducer
