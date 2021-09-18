import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    // marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 250,
  },
}));

export default function DatetimePicker(props) {
  const classes = useStyles();

  return (
    <form className={classes.container}>
      <TextField
        label={props?.label}
        id="datetime-local"
        type="datetime-local"
        // defaultValue={moment(new Date()).format("YYYY-MM-DDTkk:mm")}
        value={props.value || moment(new Date()).format("YYYY-MM-DDTkk:mm")}
        onChange={e => props.onChange(e.target.value)}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}
