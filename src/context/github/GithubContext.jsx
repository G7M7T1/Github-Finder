import {createContext, useReducer} from "react";
import GithubReducer from "./GithubReducer"

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({children}) => {
    const initialState = {
        users: [],
        user: [],
        Loading: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState)

    const searchUsers = async (text) => {
        setLoading()

        const params = new URLSearchParams({
            q: text
        })

        const response = await fetch(`${GITHUB_URL}search/users?${params}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })

        const {items} = await response.json()

        dispatch({
            type: "GET_USERS",
            payload: items
        })
    }

    const getUser = async (login) => {
        setLoading()

        const response = await fetch(`${GITHUB_URL}users/${login}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })

        if (response.status === 404) {
            window.location = "/404"
        } else {
            const data = await response.json()

            dispatch({
                type: "GET_USER",
                payload: data
            })
        }
    }

    const setLoading = () => dispatch({
        type: "SET_LOADING"
    })

    const clearUsers = () => dispatch({
        type: "CLEAR_USERS"
    })

    return(
        <GithubContext.Provider value={{
            users: state.users,
            user: state.user,
            Loading: state.Loading,
            searchUsers,
            clearUsers,
            getUser
        }}>
            {children}
        </GithubContext.Provider>
    )
}

export default GithubContext
