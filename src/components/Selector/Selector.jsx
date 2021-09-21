import { FormControl, InputLabel, Select } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux';

export default function Selector(props) {
    const dispatch = useDispatch();
    
    const handleChange = (event) => {
        dispatch(props.action(event.target.value));
    }

    return (
        <FormControl className={props.styles.formControl}>
            <InputLabel className={props.styles.inputLabel}>{props.inputLabel}</InputLabel>
            <Select
                native
                disabled = {props?.data?.length > 0 ? false : true}
                className={props.styles.select}
                onChange={handleChange}
                inputProps={props.inputProps}
            >
                <option aria-label="None" key={0} value="" />
                {
                    props.data.map(item => (
                        <option key={item[props.valueKey]} value={item[props.valueKey]}>{item[props.optionKey]}</option>
                    ))
                }
            </Select>
        </FormControl>
    )
}
