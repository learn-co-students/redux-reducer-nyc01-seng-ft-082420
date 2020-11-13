export function manageFriends(state, action){
    switch (action.type) {
        case 'ADD_FRIEND':
            return {...state, friends: [...state.friends, action.friend]}
        case 'REMOVE_FRIEND':
               let removed = state.friends.filter(friend => friend.id !== action.id);
               return {friends: removed}
        default:
            return state
    }
}
