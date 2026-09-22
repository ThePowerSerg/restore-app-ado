import { createSlice } from "@reduxjs/toolkit";

// gets the initial state of the darkmode from local storage
const getInitialDarkMode = () => {
  const storedDarkMode = localStorage.getItem('darkMode');
  //if null then return true, otherwise return the storedDarkmode value (true or false)
  return storedDarkMode ? JSON.parse(storedDarkMode) : true
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isLoading: false,
        darkMode: getInitialDarkMode()
    },
    reducers: {
        startLoading: (state) => {
            state.isLoading = true;
        },
        stopLoading: (state) => {
            state.isLoading = false;
        },
        // sets the value of darkMode variable either true or false
        toggleDarkMode: (state) => {
            localStorage.setItem('darkMode', JSON.stringify(!state.darkMode))
            state.darkMode = !state.darkMode
        }
    }
});

export const {startLoading, stopLoading, toggleDarkMode} = uiSlice.actions;