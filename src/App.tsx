import {
  Box,
  Button,
  CssBaseline,
  Grid2,
  Stack,
  TextField,
} from '@mui/material';
import { List } from './components';
import { useState } from 'react';
import { Create } from './components/Create';

export const App = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  return (
    <>
      <CssBaseline />
      <Grid2 container spacing={2}>
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
          <Stack direction="row" spacing={2}>
            <Button onClick={() => setOpen(true)}>Add Task</Button>
            <TextField
              id="outlined-basic"
              label="Search by category"
              variant="outlined"
            />
            <Button>Search</Button>
            <Button>Cancle</Button>
          </Stack>
          <List />
        </Box>
      </Grid2>
      <Create open={open} handleClose={handleClose} />
    </>
  );
};
