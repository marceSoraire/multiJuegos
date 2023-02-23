import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
const Load = () => {
  return (
    <Box className='flex justify-center mt-48'>
      <CircularProgress color='primary' size={100} className='mt-20'/>
    </Box>
  );
}
export default Load;