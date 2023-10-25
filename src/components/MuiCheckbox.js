import React from 'react'
import {Box, FormControlLabel} from '@mui/material'
import Checkbox from '@mui/material/Checkbox';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark'
import { useState } from 'react';

const MuiCheckbox = () => {
  const [acceptTnC, setAcceptTnC] = useState(false);
  console.log({acceptTnC})

  const handleChange  = (e) => {
     setAcceptTnC(e.target.checked)
  }
  return (
    <Box>
        <Box>
           <FormControlLabel label='I accept terms and conditions' control={<Checkbox checked={acceptTnC} onChange={handleChange} />} />
        </Box>

        <Box>
           <Checkbox 
           icon = {<BookmarkBorderIcon/>}
           checkedIcon = {<BookmarkIcon/>}
           checked = {acceptTnC}
           onChange={handleChange}
           />
        </Box> 
    </Box>
  )
}

export default MuiCheckbox