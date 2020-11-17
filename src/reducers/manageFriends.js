export function manageFriends(state = {friends: []}, action){
  switch (action.type) {
    case "ADD_FRIEND":
      state = {friends: [ ...state.friends, action.friend ]}
      return state
      break;
    case "REMOVE_FRIEND":
      let newState = {};
      newState.friends = state.friends.filter(friend => friend.id !== action.id )
      return newState
      break;
    default:
      return state
  }
}
