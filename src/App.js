import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import H2Input from './components/H2Input'
import FilledInput from './components/FilledInput';

import EventIcon from '@material-ui/icons/Event';
import QueryBuilder from '@material-ui/icons/QueryBuilder';
import LocationOn from'@material-ui/icons/LocationOn';
import Subject from '@material-ui/icons/Subject';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'
import grey from '@material-ui/core/colors/grey'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[50]
    },
    secondary: {
      main: grey[50]
    }
  },
})

const App = () => <ThemeProvider theme={theme}>
  <AppBar position="fixed" color='white'>
    <Toolbar>
      <EventIcon style={{ marginRight: theme.spacing(1) }}/>
      <Typography variant="h6">
        Google Calendar Link Generator
      </Typography>
    </Toolbar>
  </AppBar>

  <Box
    display="flex"
    flexGrow={1}
    height="100%"
    justifyContent="center"
    alignItems="center"
  >
    <Box zIndex={0} position='absolute' top='0' bottom='0' width='100%' height='100%' style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1510154328089-bdd27fc4ff66?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=nigel-tadyanehondo-d30E78EkCIE-unsplash.jpg&w=1920)', filter: 'brightness(0.8) blur(3px)' }} />

    <Paper elevation={3} style={{ padding: theme.spacing(8, 8, 10, 8), zIndex: 1 }}>
      <H2Input type="text" placeholder="活動名稱" style={{ marginLeft: theme.spacing(5), border: 'solid #E5E5E5', borderWidth: '0 0 2px 0' }} />

      <Box display="flex" alignItems="center" style={{ marginTop: theme.spacing(2) }}>
        <QueryBuilder style={{ marginRight: theme.spacing(2.5), color: 'rgba(0, 0, 0, 54%)' }} />

      </Box>

      <Box display="flex" alignItems="center" style={{ marginTop: theme.spacing(2) }}>
        <LocationOn style={{ marginRight: theme.spacing(2.5), color: 'rgba(0, 0, 0, 54%)' }} />
        <FilledInput style={{ flex: 1 }} placeholder="活動位置" />
      </Box>

      <Box display="flex" style={{ marginTop: theme.spacing(2) }}>
        <Subject style={{ marginRight: theme.spacing(2.5), marginTop: theme.spacing(2), color: 'rgba(0, 0, 0, 54%)' }} />
        <FilledInput multiline style={{ flex: 1 }} placeholder="活動說明" rows={5} />
      </Box>


    </Paper>
  </Box>
</ThemeProvider>


export default App
