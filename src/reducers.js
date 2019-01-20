import {CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCSESS,
  REQUEST_ROBOTS_FAILED
}
from './types'

const INITIAL_STATE_SEARCH = {
  searchField: ''
}

export const searchRobots = (state=INITIAL_STATE_SEARCH, action={}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return {
        ...state, searchField: action.payload
      }
    default:
      return state;
  }
}

const INITIAL_STATE_ROBOTS = {
  isPending: false,
  robots: [],
  error: ''
}

export const requestRobots = (state=INITIAL_STATE_ROBOTS, action={}) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return {
        ...state, isPending: true
      }
    case REQUEST_ROBOTS_SUCSESS:
      return {
        ...state, robots: action.payload, isPending: false
      }
    case REQUEST_ROBOTS_FAILED:
      return {
        ...state, error: action.payload, isPending: false
      }
    default:
      return state;
  }
}
