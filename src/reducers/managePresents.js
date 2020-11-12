export function managePresents(state, action){

    // action = {
    //     type: "INCREASE"
    // }

    if (action.type === "INCREASE") {
        return {numberOfPresents: state.numberOfPresents + 1}
    } else {
        return {numberOfPresents: state.numberOfPresents}
    }
}
