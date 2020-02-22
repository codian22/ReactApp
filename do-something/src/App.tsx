
import React from 'react';
import Button from '@material-ui/core/Button';

function App() {
  let message = 'This is test';

  return (
    <Button variant="contained" color="primary">
      { message }
    </Button>
  );
}

export default App;

