import { actionName } from "../data/index"

export default bookReducer = (state = {}, action) => {
    switch (action.type) {
        case actionName.addBook:
            return action.book
            break;
        default:
            return state
    }
}