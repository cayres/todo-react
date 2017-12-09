const  INITIAL_STATE = { description: "", list: [], error: [] }

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case "DESCRIPTION_CHANGE":
            return { ...state, description: action.payload }    
        case "TODO_SEARCHED":
            return { ...state, list: action.payload }
        case "SHOW_ERROR":
            let error = []
            if (action.payload){
                error = state.error
                error.push(action.payload)
            }
            return { ...state, error }
        default:
            return state
    }
}