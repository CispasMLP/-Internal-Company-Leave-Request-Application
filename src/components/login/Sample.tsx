
import { TextField } from "@material-ui/core";
import { useField,Field} from "formik";

const Sample = (name:any,...otherProps:any) => {
    const [field, mata]= useField(name)

    const configTextfiled ={
        ...field,
        ...otherProps,
        fullWidth: true,
        variant: 'outlined'
    }

    if(mata && mata.touched && mata.error){
        configTextfiled.error=true;
        configTextfiled.helperText = mata.error;
    }
  return (
    <Field as={TextField} {...configTextfiled}/>
  )
}

export default Sample