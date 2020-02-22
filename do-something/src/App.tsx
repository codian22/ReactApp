
import React from 'react';
import Button from '@material-ui/core/Button';

function App() {
  let message = 'This is test';

  return (
    <>
    <Button variant="contained" color="primary">
      { message }
    </Button>
    <Button variant="contained" color="primary">
      { message + '2' }
    </Button>
    </>
  );
}

export default App;

