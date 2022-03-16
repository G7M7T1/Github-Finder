const GithubReducer = (state, action) => {
    switch (action.type) {
        case 'GET_USERS':
            return {
                ...state,
                users: action.payload,
                Loading: false
            }
        case "SET_LOADING":
            return {
                ...state,
                Loading: true
            }
        default:
            return state
    }
}

export default GithubReducer
