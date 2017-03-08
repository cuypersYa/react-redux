import { combineReducers } from 'redux'
import {
  SELECT_Meal, INVALIDATE_Meal,
  REQUEST_POSTS, RECEIVE_POSTS
} from '../actions'

const selectedMeal = (state = 'meat', action) => {
  switch (action.type) {
    case SELECT_Meal:
      return action.Meal
    default:
      return state
  }
}

const posts = (state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) => {
  switch (action.type) {
    case INVALIDATE_Meal:
      return {
        ...state,
        didInvalidate: true
      }
    case REQUEST_POSTS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      }
    case RECEIVE_POSTS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      }
    default:
      return state
  }
}

const postsByMeal = (state = { }, action) => {
  switch (action.type) {
    case INVALIDATE_Meal:
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return {
        ...state,
        [action.Meal]: posts(state[action.Meal], action)
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  postsByMeal,
  selectedMeal
})

export default rootReducer
