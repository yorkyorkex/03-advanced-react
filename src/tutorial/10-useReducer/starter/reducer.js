import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from './actions'
import { data } from '../../../data'

function reducer(state, action) {
  switch (action.type) {
    case CLEAR_LIST:
      return { ...state, people: [] }
    case RESET_LIST:
      return { ...state, people: data }
    case REMOVE_ITEM:
      return {
        ...state,
        people: state.people.filter(
          (person) => person.id !== action.payload.id
        ),
      }
    default:
      throw new Error(`no matching action type ${action.type}`)
  }
}

export default reducer
