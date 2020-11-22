import React, { useState } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import H2Input from './components/H2Input';
import FilledInput from './components/FilledInput';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import IconButton from '@material-ui/core/IconButton';

import DateFnsAdapter from '@material-ui/pickers/adapter/date-fns';
import enLocale from 'date-fns/locale/en-US';
import {
  DatePicker,
  DateTimePicker,
  LocalizationProvider,
} from '@material-ui/pickers';

import EventIcon from '@material-ui/icons/Event';
import QueryBuilder from '@material-ui/icons/QueryBuilder';
import LocationOn from '@material-ui/icons/LocationOn';
import Subject from '@material-ui/icons/Subject';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import grey from '@material-ui/core/colors/grey';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[700]
    },
    secondary: grey
  },
});

const App = () => {
  const [selectedFromDate, handleFromChange] = useState();
  const [selectedToDate, handleToChange] = useState();
  const [fullDay, setFullDay] = useState(false);
  const handleFulldayChange = (event) => {
    setFullDay(event.target.checked);
  };

  const PickerComponent = fullDay ? DatePicker : DateTimePicker;

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={DateFnsAdapter} locale={enLocale}>
        <AppBar position="fixed" color="default">
          <Toolbar>
            <EventIcon style={{ marginRight: theme.spacing(1) }} />
            <Typography variant="h6">Google Calendar Link Generator</Typography>
          </Toolbar>
        </AppBar>

        <Box
          display="flex"
          flexGrow={1}
          height="100%"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            zIndex={0}
            position="absolute"
            top="0"
            bottom="0"
            width="100%"
            height="100%"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1510154328089-bdd27fc4ff66?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=nigel-tadyanehondo-d30E78EkCIE-unsplash.jpg&w=1920)',
              filter: 'brightness(0.8) blur(3px)',
            }}
          />

          <Paper
            elevation={3}
            style={{ padding: theme.spacing(8, 8, 10, 8), zIndex: 1 }}
          >
            <H2Input
              type="text"
              placeholder="活動名稱"
              style={{
                marginLeft: theme.spacing(5),
                border: 'solid #E5E5E5',
                borderWidth: '0 0 2px 0',
              }}
            />

            <Box
              display="flex"
              alignItems="flex-start"
              flexWrap="nowrap"
              style={{ marginTop: theme.spacing(2) }}
            >
              <QueryBuilder
                style={{
                  paddingTop: theme.spacing(2.5),
                  marginRight: theme.spacing(2.5),
                  color: 'rgba(0, 0, 0, 54%)',
                }}
              />

              <Box display="flex" alignItems="center" flexWrap="wrap">
                <PickerComponent
                  renderInput={(props) => (
                    <TextField variant="outlined" {...props} />
                  )}
                  value={selectedFromDate}
                  onChange={handleFromChange}
                />

                <p style={{ padding: '0 12px 16px' }}>到</p>

                <PickerComponent
                  renderInput={(props) => (
                    <TextField variant="outlined" {...props} />
                  )}
                  value={selectedToDate}
                  onChange={handleToChange}
                />

                <FormControlLabel
                  style={{
                    marginLeft: theme.spacing(2),
                    marginBottom: theme.spacing(2),
                  }}
                  control={
                    <Checkbox
                      checked={fullDay}
                      color="primary"
                      onChange={handleFulldayChange}
                      name="checkedA"
                    />
                  }
                  label="全天"
                />
              </Box>
            </Box>

            <Box
              display="flex"
              alignItems="center"
              style={{ marginTop: theme.spacing(2) }}
            >
              <LocationOn
                style={{
                  marginRight: theme.spacing(2.5),
                  color: 'rgba(0, 0, 0, 54%)',
                }}
              />
              <FilledInput style={{ flex: 1 }} placeholder="活動位置" />
            </Box>

            <Box display="flex" style={{ marginTop: theme.spacing(2) }}>
              <Subject
                style={{
                  marginRight: theme.spacing(2.5),
                  marginTop: theme.spacing(2),
                  color: 'rgba(0, 0, 0, 54%)',
                }}
              />
              <FilledInput
                multiline
                style={{ flex: 1 }}
                placeholder="活動說明"
                rows={5}
              />
            </Box>

            <Box
              display="flex"
              alignItems="center"
              flexWrap="nowrap"
              style={{ marginLeft: theme.spacing(5.5), marginTop: theme.spacing(3) }}
            >
              <Button variant="contained" color="primary">
                產生連結
              </Button>

              <IconButton style={{ margin: theme.spacing(0, 3) }}>
                <FileCopyOutlinedIcon />
              </IconButton>

              <FilledInput disabled style={{ flex: 1 }} />
            </Box>
          </Paper>
        </Box>
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default App;
