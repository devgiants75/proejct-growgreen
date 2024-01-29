import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { fontSize } from '@mui/system';

const Theme = createTheme();

// signup (login)
export default function Index() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };

  return (
    <ThemeProvider theme={Theme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            mt: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <form onSubmit={handleSubmit} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography sx={{ mb: 1 }} style={{ fontSize: '20rem' }}>
                  로그인
                </Typography>
                {/* 아이디 */}
                <TextField
                  required
                  fullWidth
                  id="userId"
                  label="Outlined"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                {/* 비밀번호 */}
                <TextField
                  style={{ fontSize: '16rem' }}
                  required
                  fullWidth
                  id="password"
                  label="Password"
                  type="password"
                />
              </Grid>
            </Grid>
            {/* 로그인 버튼 */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{ fontSize: '16rem' }}
            >
              로그인
            </Button>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
