export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_Meal = 'SELECT_Meal'
export const INVALIDATE_Meal = 'INVALIDATE_Meal'

export const selectMeal = Meal => ({
  type: SELECT_Meal,
  Meal
})

export const invalidateMeal = Meal => ({
  type: INVALIDATE_Meal,
  Meal
})

export const requestPosts = Meal => ({
  type: REQUEST_POSTS,
  Meal
})

export const receivePosts = (Meal, json) => ({
  type: RECEIVE_POSTS,
  Meal,
  posts: json.map(child => child),
  receivedAt: Date.now()
})

const fetchPosts = Meal => dispatch => {
  dispatch(requestPosts(Meal))
  return fetch(`http://localhost:8001/meals/${Meal}`)
    .then(response => response.json())
    .then(json => dispatch(receivePosts(Meal, json)))
}

const shouldFetchPosts = (state, Meal) => {
  const posts = state.postsByMeal[Meal]
  if (!posts) {
    return true
  }
  if (posts.isFetching) {
    return false
  }
  return posts.didInvalidate
}

export const fetchPostsIfNeeded = Meal => (dispatch, getState) => {
  if (shouldFetchPosts(getState(), Meal)) {
    return dispatch(fetchPosts(Meal))
  }
}
