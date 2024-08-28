import { Button, List as MuiList, Stack } from '@mui/material';
import { tasks } from '../service/mockData';

export const List = () => {
  return (
    <MuiList>
      {tasks.map((item) => (
        <Stack key={item.id} direction="row">
          {item.title}
          <Button>Done</Button>
          <Button>Delete</Button>
        </Stack>
      ))}
    </MuiList>
  );
};
