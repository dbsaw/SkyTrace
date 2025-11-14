import { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Paper,
  Typography,
  Container,
} from '@mui/material';

export const EchoInput = () => {
  const [inputValue, setInputValue] = useState('');

  const handleClear = () => {
    setInputValue('');
  };

  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
          <Typography variant="h2" component="h1" gutterBottom sx={{ mb: 3 }}>
            Text Echo
          </Typography>

          <Typography variant="body1" color="textSecondary" sx={{ mb: 3 }}>
            Enter any text below and see it echoed back instantly.
          </Typography>

          <Box sx={{ mb: 3 }}>
            <TextField
              fullWidth
              multiline
              rows={6}
              placeholder="Enter your text here..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  fontSize: '1rem',
                },
              }}
            />
          </Box>

          <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleClear}
            >
              Clear
            </Button>
          </Box>

          {inputValue && (
            <Paper
              sx={{
                p: 3,
                backgroundColor: '#f5f5f5',
                borderLeft: '4px solid',
                borderLeftColor: 'primary.main',
              }}
            >
              <Typography variant="subtitle2" color="textSecondary" sx={{ mb: 1 }}>
                Echoed Text:
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  wordBreak: 'break-word',
                  whiteSpace: 'pre-wrap',
                }}
              >
                {inputValue}
              </Typography>
              <Typography
                variant="caption"
                color="textSecondary"
                sx={{ display: 'block', mt: 2 }}
              >
                Characters: {inputValue.length}
              </Typography>
            </Paper>
          )}
        </Paper>
      </Container>
    </Box>
  );
};
