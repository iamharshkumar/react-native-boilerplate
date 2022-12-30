import * as React from 'react';
import * as SecureStore from 'expo-secure-store';
import auth from '../service/auth'
import { message } from '../components/generic/Message';

const defaultProps = {
    isLoading: true,
    isSignout: false,
    userToken: null,
    signIn: () => null,
    signOut: () => null,
    signUp: () => null
}

export const AuthContext = React.createContext(defaultProps);

export default function AuthContextProvider({ children }) {
    const [state, dispatch] = React.useReducer(
        (prevState, action) => {
            switch (action.type) {
                case 'RESTORE_TOKEN':
                    return {
                        ...prevState,
                        userToken: action.token,
                        isLoading: false,
                    };
                case 'SIGN_IN':
                    return {
                        ...prevState,
                        isSignout: false,
                        userToken: action.token,
                    };
                case 'SIGN_OUT':
                    return {
                        ...prevState,
                        isSignout: true,
                        userToken: null,
                    };
            }
        },
        {
            isLoading: true,
            isSignout: false,
            userToken: null,
        }
    );

    React.useEffect(() => {
        // Fetch the token from storage then navigate to our appropriate place
        const bootstrapAsync = async () => {
            let userToken;

            try {
                userToken = await SecureStore.getItemAsync('userToken');
            } catch (e) {
                // Restoring token failed
            }

            dispatch({ type: 'RESTORE_TOKEN', token: userToken });
        };

        bootstrapAsync();
    }, []);


    const authContext = {
        ...state,
        signIn: (username, password) => {
            auth.doLogin(username, password).then(response => {
                dispatch({ type: 'SIGN_IN', token: response.data.token });
                SecureStore.setItemAsync('userToken', response.data.token);
            })
                .catch(e => {
                    message.error('User not found.')
                })
        },
        signOut: async () => {
            await SecureStore.deleteItemAsync('userToken')
            dispatch({ type: 'SIGN_OUT' })
        },
    }

    return (
        <AuthContext.Provider value={{ ...authContext }}>
            {children}
        </AuthContext.Provider>
    );
}