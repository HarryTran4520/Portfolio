'use client'
import './globals.css';
// MUI Theme
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import darkTheme from '@/theme/darkTheme';
// Emotion Cache
import createEmotionCache from '@/theme/createEmotionCache';
import { CacheProvider } from '@emotion/react';
// Global Layout Components
import Header from '../../components/global/Header';
import PageWrapper from '../../components/global/PageWrapper';
import BackGround from '../../components/global/Background';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export const metadata = {
  title: 'Harry The Fullstack Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="emotion-insertion-point" content="" />
      <body>
        <CacheProvider value={clientSideEmotionCache}>
          <ThemeProvider theme={createTheme(darkTheme)}>
            <CssBaseline/>
            <BackGround/>
            <Header/>
            <PageWrapper>
              {children}
            </PageWrapper>
          </ThemeProvider>
        </CacheProvider>
      </body>
    </html>
  )
}
