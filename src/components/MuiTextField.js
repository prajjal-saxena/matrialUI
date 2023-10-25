import { InputAdornment, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'

const MuiTextField = () => {
    const [value, setValue] = useState('')
  return (
    <Stack>
        <Stack direction='row' spacing={2}>
            <TextField label='Name' variant='outlined'/>
            <TextField label='Name' variant='filled' />
            <TextField label='Name' variant='standard' />
        </Stack>

        <Stack>
            <TextField label='Small secondary' size='small' color='secondary'/>
        </Stack>

        <Stack>
            <TextField label='Form Input' required value={value} onChange={(e) => setValue(e.target.value)} 
            error={!value}
            helperText={!value ? 'Required' : 'Do not share the password with anyone'}/>
            <TextField label='Password' type='password' disabled helperText='Do not share your password with anyone'/>
        </Stack>

        <Stack direction='row' spacing={2}>
            <TextField label='Amount' 
            InputProps={{
                startAdornment: <InputAdornment position='start'>$</InputAdornment>
            }} />
            <TextField label='Weight' 
            InputProps={{
                endAdornment : <InputAdornment position='end'>kg</InputAdornment>
            }} />
        </Stack>
    </Stack>
  )
}

export default MuiTextField