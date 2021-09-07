import { actionName } from "../data/index"

export default booksReducer = (state = [], action) => {
    switch (action.type) {
        case actionName.addBooksFromList:
            if (action.category || action.sort) {
                const newList = [];
                return newList.concat(action.list);
            } else {
                return state.concat(action.list);
            }
            break;
        default:
            return state
    }
}