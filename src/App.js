import React, { Component } from 'react';
import './App.css';
import { Button } from '@mui/material';
import Typo from './components/Typo';
import Buttonui from './components/Buttonui';
import MuiTextField from './components/MuiTextField';
import MuiSelect from './components/MuiSelect';
import MuiRadioButton from './components/MuiRadioButton';
import MuiCheckbox from './components/MuiCheckbox';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Typo/> */}
        {/* <Buttonui/> */}
        {/* <MuiTextField/> */}
        {/* <MuiSelect/> */}
        {/* <MuiRadioButton/> */}
        <MuiCheckbox/>
      </div>
    );
  }
}

export default App;
