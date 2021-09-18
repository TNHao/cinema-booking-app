import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { useDispatch } from 'react-redux';
import { actSetTicketPriceSelected } from 'redux/actions/actMovieSchedule';

export default function MuiRadio() {
  const dispatch = useDispatch();

  const handleRadioChange = (event) => {
    dispatch(actSetTicketPriceSelected(event.target.value));
  };

  return (
    <FormControl component="fieldset" className="ml-md-4 mt-4">
      <FormLabel component="legend">Giá tiền</FormLabel>
      <RadioGroup onChange={handleRadioChange} row defaultValue="55000" >
        <FormControlLabel value="55000" control={<Radio color="primary"/>} label="55.000 VND"/>
        <FormControlLabel value="75000" control={<Radio color="primary"/>} label="75.000 VND"/>
        <FormControlLabel value="95000" control={<Radio color="primary"/>} label="95.000 VND"/>
      </RadioGroup>
    </FormControl>
  );
}
