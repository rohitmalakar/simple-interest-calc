import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';


function SimpleInterestCalculator() {
    const [p, setP] = useState(0);
    const [r, setR] = useState(0);
    const [t, setT] = useState(0);
    const [si, setSi] = useState(0);
  
    const calculateInterest = () => {
      setSi(p*t*r/100);
    }
    return (
      <Box  sx={{ flexGrow: 1 }} m={3}>
          <TextField
            required
            id="outlined-required"
            label="Enter Principal" 
            onChange={(event) => setP(event.target.value)} 
            mb={2}
            />
            <br />
            <br />
            <TextField
            required
            id="outlined-required"
            label="Enter Time Year"
            onChange={(event) => setT(event.target.value)}
            />
            <br />
            <br />
            <TextField
            required
            id="outlined-required"
            label="Enter Interest Rate"
            onChange={(event) => setR(event.target.value)}
            />
            <br />
            <br />
          <Button variant="contained" size="large" onClick={calculateInterest}>Calculate</Button>
            <br />
            <br />
          
          <Typography variant="h6" gutterBottom>
          The Simple Interest is {p} {t} {r} {si}
        </Typography>
        
      </Box>
    );
  }
  
  export default SimpleInterestCalculator;