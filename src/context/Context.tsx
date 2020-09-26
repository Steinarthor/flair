import React from 'react'

type Action = { type: string; payload: Record<string, string> }
type Dispatch = (action: Action) => void
type State = { theme: string }
type ProviderProps = { children: React.ReactNode }

const StateContext = React.createContext<State | undefined>(undefined)
const DispatchContext = React.createContext<Dispatch | undefined>(undefined)

const contextReducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'SET_THEME':
            return {
                theme: action.payload.theme,
            }
        default:
            throw new Error(`Unhandled action type ${action.type}`)
    }
}

const Provider = ({ children }: ProviderProps): JSX.Element => {
    const theme = localStorage.getItem('theme')
    document
        .querySelector('html')
        ?.setAttribute(
            'style',
            `background-color:${
                theme === 'dark' ? '#242526' : '#ffffff'
            }; transition: background-color 100ms ease-in-out`
        )
    const [state, dispatch] = React.useReducer(contextReducer, {
        theme: theme || 'light',
    })
    return (
        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                {children}
            </DispatchContext.Provider>
        </StateContext.Provider>
    )
}

const useContext = (): State => {
    const context = React.useContext(StateContext)
    if (context === undefined) {
        throw new Error('useStateContext must be used within a Provider')
    }
    return context
}

const useDispatch = (): Dispatch => {
    const context = React.useContext(DispatchContext)
    if (context === undefined) {
        throw new Error('useDipatchContext must be used within a Provider')
    }
    return context
}

export { Provider, useContext, useDispatch }
