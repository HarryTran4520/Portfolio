import React from 'react';
import { useRouter } from 'next/navigation';
import { Box, Typography, Link } from '@mui/material';

export default function Intro() {
  const router = useRouter();
  return (
    <Box sx={{display: "flex", flexDirection: "column", rowGap: "25px", maxWidth: "900px", paddingTop: "60px"}}>
      <Typography sx={{fontSize: "24px", fontWeight: "500", color: "primary.light"}}>
        Hi, my name is
      </Typography>
      <Typography sx={{fontSize: "50px", fontWeight: "600"}}>
        Harry Tran
      </Typography>
      <Typography sx={{fontSize: "50px", fontWeight: "600"}}>
        I love building things in React.
      </Typography>
      <Typography sx={{fontSize: "24px", fontWeight: "500"}}>
        I am a fullstack engineer and an “occasional” UI/UX designer with 
        strong passion to deliver high standard digital solutions.
      </Typography>
      <Typography sx={{fontSize: "20px", fontWeight: "400"}}>
        Wonder what I can build for you?<br/>
        Click one of the demos below, or &nbsp;
        <Link sx={{color: "primary.light", cursor: "pointer"}} onClick={() => router.push("/demos")}>
          view all of my Demos!
        </Link>
      </Typography>
    </Box>
  )
}