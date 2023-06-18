import React from 'react';
import { Box } from '@mui/material';

export default function PageWrapper({children}) {
  return (
    <Box sx={{ padding: "20px 100px", overflowY: "auto" }}>
      {children}
    </Box>
  )
}