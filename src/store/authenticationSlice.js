import { createSlice } from '@reduxjs/toolkit';

const initialDate = {
    username: '',
    role: ''
};

const authenticationSlice = createSlice({
    name: 'authentication',
    initialState: initialDate,
    reducers: {
        logIn: (state, action) => {
            console.log(action.payload);
            state.username = action.payload.username;
            // надо массив сделать саккаунтами
            if (
                action.payload.username === 'bla@gmail.com' &&
                action.payload.password === 'bla12345'
            ) {
                state.role = 'admin';
            } else {
                state.role = 'user';
            }
            console.log(state.role);
            console.log(state.username);
            const user = { role: state.role, username: state.username };
            console.log(user);
            localStorage.setItem('authentication', JSON.stringify(user));
        },
        logOut: state => {
            state.username = '';
            state.role = '';
            localStorage.removeItem('authentication');
        },
        setFromLocalStorage: state => {
            const data = localStorage.getItem('authentication');
            console.log(data);
            if (data) {
                const parsedData = JSON.parse(data);
                state.username = parsedData.username || '';
                state.role = parsedData.role || '';
            }
        }
    }
});

export const { logIn, logOut, setFromLocalStorage } = authenticationSlice.actions;
export default authenticationSlice.reducer;
