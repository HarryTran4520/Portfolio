'use client'
import './globals.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import darkTheme from '@/theme/darkTheme';
import Header from '../../components/global/Header';
import PageWrapper from '../../components/global/PageWrapper';

export const metadata = {
  title: 'Harry The Fullstack Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={createTheme(darkTheme)}>
          <CssBaseline/>
          <Header/>
          <PageWrapper>
            {children}
          </PageWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}
