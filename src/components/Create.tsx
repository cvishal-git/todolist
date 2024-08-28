import {
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

interface IProps {
  open: boolean;
  handleClose: () => void;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const Create = (props: IProps) => {
  const { open, handleClose } = props;

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography>Add Task</Typography>
        <TextField
          id="outlined-basic"
          label="Title"
          variant="outlined"
          sx={{ paddingBottom: 2 }}
        />
        <TextField
          id="outlined-basic"
          label="Description"
          variant="outlined"
          sx={{ paddingBottom: 2 }}
        />
        <TextField
          id="outlined-basic"
          label="Category"
          variant="outlined"
          sx={{ paddingBottom: 2 }}
        />
        <Stack direction={'row'}>
          <Button>Add</Button>
          <Button onClick={handleClose}>Cancle</Button>
        </Stack>
      </Box>
    </Modal>
  );
};
