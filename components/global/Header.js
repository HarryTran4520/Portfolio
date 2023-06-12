'use client';
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { AppBar, Toolbar, Typography, Tabs, Tab, Box } from '@mui/material';

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  
  return (
    <AppBar sx={{padding: "10px 16px", backgroundImage: "none", position: "static"}} enableColorOnDark>
      <Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
        {/* Avatar and Name */}
        <Box sx={{display: "flex", alignItems: "center", gap: "10px"}}>
          <Image src="/avatar.jpg" width={50} height={50} style={{borderRadius: "50%"}}/>
          <Typography sx={{fontSize: "24px", fontWeight:"500"}}>Harry Tran</Typography>
        </Box>
        {/* Navigation */}
        <Tabs
          value={pathname}
          textColor='secondaryLight'
          indicatorColor='secondaryLight'
          sx={{
            "& .MuiTab-root": {fontSize: "16px", fontWeight: "400", padding: "5px 16px",},
            "& .Mui-selected": {color: "secondary.light"},
            "& .MuiTabs-indicator": {backgroundColor: "secondary.light"},
          }}
        >
          <Tab label="HOME" value="/" onClick={() => router.push("/")}/>
          <Tab label="MY DEMOS" value="/demos" onClick={() => router.push("/demos")}/>
          <Tab label="CONTACT" value="/contact" onClick={() => router.push("/contact")}/>
        </Tabs>
      </Toolbar>
    </AppBar>
  )
}