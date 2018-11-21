import { combineReducers } from 'redux'

// function counNum(state=0, action) {
//   switch (action.type) {
//     case 'add':
//       return state++
//     case 'div':
//       return state--
//     default:
//       return state
//   }
// }



function addNum(state = 1, action) {
  const count = state.count
  switch (action.type) {
    case 'add':
      return state + action.data
    default:
      return state
  }
}

function divNum(state=0, action) {
  switch (action.type) {
    case 'div':
      return state - action.data
    default:
      return state
  }
}

const reducer = combineReducers({
  addNum,
  divNum
})

export default reducer
