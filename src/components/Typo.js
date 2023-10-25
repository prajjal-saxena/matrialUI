import { Typography } from '@mui/material'
import React from 'react'

const Typo = () => {
  return (
    <div>
       <Typography variant='h1'>h1 Heading</Typography>
       <Typography variant='h2'>h2</Typography>
       <Typography variant= 'h3'>h3</Typography>
       <Typography variant= 'h4' component='h1' gutterBottom>h4</Typography>
       <Typography variant='h5'>h5</Typography>
       <Typography variant='h6'>h6</Typography>
       <Typography variant='subtitle1'>Sub title 1</Typography>
       <Typography variant='subtitle2'>Sub title 2</Typography>

       <Typography variant='body1'>Lorem ipsum dolor sit amet.</Typography>
       <Typography variant='body2'>Lorem ipsum dolor sit amet.</Typography>
    </div>
  )
}

export default Typo