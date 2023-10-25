import { Box, FormControl, FormControlLabel, FormLabel, RadioGroup, FormHelperText } from '@mui/material'
import React from 'react'
import Radio from '@mui/material/Radio';
import { useState } from 'react';


const MuiRadioButton = () => {
  const [value, setValue] = useState('')
  console.log(value)

  const handleChange = (e) =>{
      setValue(e.target.value);
  }
  return (
    <Box>
        <FormControl>
            <FormLabel id= 'job-experience-group-label' error>
                Years of experience
            </FormLabel>

            <RadioGroup name='job-experience-group' aria-labelledby='job-experience-group-label'
            value={value} onChange={handleChange}>
                <FormControlLabel control={<Radio size='medium' color='secondary'/>} label='0-2' value='0-2' />
                <FormControlLabel control={<Radio />} label='3-5' value='3-5' />
                <FormControlLabel control={<Radio />} label='6-10' value='6-10' />
            </RadioGroup>
            <FormHelperText>Invalid selection</FormHelperText>
        </FormControl>
    </Box>
  )
}

export default MuiRadioButton