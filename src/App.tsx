import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import FirstPage from './pages/FirstPage'

const theme = createTheme();

const App: React.FC =() => {
  return (
    <ThemeProvider themen={theme}>
      <CssBaseline>
        <Router>
          <Routes>
            <Route path="/" element={<FirstPage/>}/>
            </Routes>
          </Router>
        </CssBaseline>
      </ThemeProvider>
  )
}

export default App;