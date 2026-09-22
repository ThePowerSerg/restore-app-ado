import { Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "../store/store";

function App() {

  //gets the current state of the darkMode variable
  const {darkMode} = useAppSelector(state => state.ui)
  
  const palleteType = darkMode ? 'dark' : 'light'

  const darkModeTheme = createTheme({
    palette: {
      mode: palleteType,
      background: {
        default: (palleteType === 'light') ? '#eaeaea' : '#121212'
      }
    }
  })

  return (
    <ThemeProvider theme={darkModeTheme}>
      <CssBaseline/>
      <NavBar />
      <Box sx={{
          minHeight:'100vh',
          background: darkMode ? '#121212' : '#eaeaea'
      }}>
        <Container maxWidth='xl' sx={{ mt: 14 }}>
          <Outlet/>
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default App
