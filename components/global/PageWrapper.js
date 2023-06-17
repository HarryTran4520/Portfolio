import React from 'react';
import { Box } from '@mui/material';

export default function PageWrapper({children}) {
  return (
    <Box sx={{ height: "calc(100vh - 84px)", padding: "20px 100px", overflowY: "auto" }}>
      {children}
    </Box>
  )
}