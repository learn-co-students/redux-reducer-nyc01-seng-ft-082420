export function manageFriends(state, action){
  switch (action.type) {
    case "ADD_FRIEND":
      return {friends: [...state.friends, action.friend]}
    case "REMOVE_FRIEND":
      let friendArray = state.friends.filter(friend=>(friend.id !== action.id))
      return {friends: friendArray}
    default:
      return {friends: state.friends}
  }
}
