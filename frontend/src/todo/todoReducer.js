const  INITIAL_STATE = {
    description: "Ler livros",
    list: [
        {
            _id: 1,
            description: "Item 1 da lista",
            done: true
        },
        {
            _id: 2,
            description: "Item 2 da lista",
            done: false
        },
        {
            _id: 3,
            description: "Item 3 da lista",
            done: false
        }
    ]
}

export default (state = INITIAL_STATE, action) => {
    console.log(action)
    switch (action.type) {
        case "DESCRIPTION_CHANGE":
            return { ...state, description: action.payload }    
        default:
            return state
    }
}