import React from 'react';
import { Paper, Typography, Box } from '@mui/material';

export default function DemoTab({ Icon, title, description }) {
  return (
    <Paper sx={{width: "350px", height: "125px", padding: "15px", borderRadius: "10px", cursor: "pointer"}}>
      <Box sx={{display: "flex", alignItems: "center", columnGap: "10px", color: "primary.variant"}}>
        <Icon sx={{fontSize: 30}}/>
        <Typography sx={{fontSize: "20px", verticalAlign: "center"}}>
          {title}
        </Typography>
      </Box>
      
      <Typography sx={{fontSize: "14px", color: "text.secondary"}}>
        {description}
      </Typography>
    </Paper>
  )
}