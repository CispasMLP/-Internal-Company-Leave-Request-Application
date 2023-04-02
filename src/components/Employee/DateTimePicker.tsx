import { TextField } from '@material-ui/core'
import { useField,Field } from 'formik';
import { FC } from "react";

type IProps = {
    name:string,
    label:string,
    // value:string,
    // onChange:any,


    
}

const DateTimePicker:FC<IProps>  = ({name,...otherProps}) => {
    const [field,meta] = useField(name);
    const configDateTimePicker ={
        ...field,
        ...otherProps,
        type: 'date',
        variant: 'outlined',
        fullWidth: true,
        InputLabelProps:{
            shrink: true
        },
        error:false,
        helperText:"",
        
        

    }

    if(meta && meta.touched && meta.error){
        configDateTimePicker.error =true;
        configDateTimePicker.helperText = meta.error;
    }
  return (
    <Field as={TextField} {...configDateTimePicker}/>
  )
}

export default DateTimePicker