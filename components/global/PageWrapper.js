import React from 'react';
import { Box } from '@mui/material';

export default function PageWrapper({children}) {
  return (
    <Box sx={{ padding: "20px 40px" }}>
      {children}
    </Box>
  )
}