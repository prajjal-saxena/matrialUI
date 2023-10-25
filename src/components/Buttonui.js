import { Button, ButtonGroup, Stack, ToggleButtonGroup, ToggleButton, TextField } from "@mui/material"
import React from "react";
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";


const Buttonui = () => {
  return (
    <>
     <Stack >
        <Stack spacing={2} direction='row'>
          <Button variant="text" href='https://google.com'>Text</Button>
          <Button variant="contained" href='https://google.com'>Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>   
        <Stack spacing={2} direction='row'>
            <Button variant="contained" color="primary">Primary</Button>
            <Button variant="contained" color="secondary">Secondary</Button>
            <Button variant="contained" color="error">Error</Button>
            <Button variant="contained" color="warning">Warning</Button>
            <Button variant="contained" color="info">Info</Button>
            <Button variant="contained" color="success">Success</Button>
        </Stack>
     </Stack>

     <Stack direction='row' spacing={2}>
       <Button variant='contained' size="small">Small</Button>
       <Button variant="contained" size="medium">Medium</Button>
       <Button variant="contained" size="large">Large</Button>
     </Stack>

      <Stack direction='row' spacing={2}>
        <Button variant='contained' startIcon={<SendIcon/>} onClick={() => alert('Clicked')}>Send</Button>
        <Button variant="contained" endIcon = {<DeleteIcon/>} disableElevation>Delete</Button>
      </Stack>

      <IconButton color="success" size="small">
         <SendIcon/>
      </IconButton>

      <Stack>
        <ButtonGroup
          variant="contained"
          orientation="horizontal"
          size="small"
          color="secondary"
          aria-label="alignment button group"
        >
         <Button onClick={()=> alert('left clicked')}>Left</Button>
         <Button>Center</Button>
         <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction='row'>
         <ToggleButtonGroup>
           <ToggleButton value='bold' aria-label='bold'><FormatBoldIcon/></ToggleButton>
           <ToggleButton value='italic' aria-label='italic'><FormatItalicIcon/></ToggleButton>
           <ToggleButton value='underline' aria-label="underlined"><FormatUnderlinedIcon/></ToggleButton>
         </ToggleButtonGroup>
      </Stack>
    </>
  )
}

export default Buttonui