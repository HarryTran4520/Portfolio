'use client';
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { Toolbar, Typography, Tabs, Tab, Box } from '@mui/material';

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  
  return (
    <Box sx={{padding: "10px 76px", backgroundImage: "none", background: "none", position: "sticky"}}>
      <Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
        {/* Avatar and Name */}
        <Box sx={{display: "flex", alignItems: "center", gap: "10px"}}>
          <Image alt='Harry avatar' src="/avatar.jpg" width={50} height={50} style={{borderRadius: "50%"}}/>
          <Typography sx={{fontSize: "24px", fontWeight:"500"}}>Harry Tran</Typography>
        </Box>
        {/* Navigation */}
        <Tabs
          value={pathname}
          sx={{
            "& .MuiTab-root": {fontSize: "16px", fontWeight: "400", padding: "5px 16px",},
            "& .MuiTab-root.Mui-selected": {color: "secondary.variant"},
            "& .MuiTabs-indicator": {backgroundColor: "secondary.variant"},
          }}
        >
          <Tab label="HOME" value="/" onClick={() => router.push("/")}/>
          <Tab label="MY DEMOS" value="/demos" onClick={() => router.push("/demos")}/>
          <Tab label="CONTACT" value="/contact" onClick={() => router.push("/contact")}/>
        </Tabs>
      </Toolbar>
    </Box>
  )
}