import React from 'react';
import { Box } from '@mui/material';
import DemoTab from '../demos/DemoTab';
import GraphIcon from '../icons/GraphIcon';
import LineChartIcon from '../icons/LineChartIcon';
import CubeIcon from '../icons/CubeIcon';
import MapGpsIcon from '../icons/MapGpsIcon';
import PaletteIcon from '../icons/PaletteIcon';

export default function IntroDemoTabs() {
  return (
    <Box sx={{display: "flex", flexWrap: "wrap", gap: "20px", paddingTop: "20px", maxWidth: "1200px"}}>
      <DemoTab
       Icon={GraphIcon}
       title={"Graph Visualization"}
       description={"When you have so many data points and need to observe the complex relationships amongst them, graph is the answer!"}
      />
      <DemoTab
       Icon={LineChartIcon}
       title={"Interactive Dashboard"}
       description={"Tracking daily performance metrics is the key to maintain a successful business, and an interactive dashboard is the way to do it!"}
      />
      <DemoTab
       Icon={CubeIcon}
       title={"3D Animation"}
       description={"Want to wow your audience whenever they visit your website? Having 3D models, or even 3D games will surely impress them!"}
      />
      <DemoTab
       Icon={MapGpsIcon}
       title={"Map & GPS"}
       description={"Need to track location, find routes, or whatever it is you think you might do with a map, I can build it for you!"}
      />
    </Box>
  )
}