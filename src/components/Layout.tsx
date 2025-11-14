import type { ReactNode } from 'react';
import { AppBar, Toolbar, Typography, Box, Container } from '@mui/material';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static" elevation={2}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SkyTrace
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        component="main"
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fafafa',
        }}
      >
        {children}
      </Box>

      <Box
        component="footer"
        sx={{
          py: 2,
          px: 2,
          backgroundColor: '#f5f5f5',
          textAlign: 'center',
          borderTop: '1px solid #e0e0e0',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="body2" color="textSecondary">
            © 2025 SkyTrace.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};
