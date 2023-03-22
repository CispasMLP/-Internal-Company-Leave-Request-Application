
import { TextField } from "@material-ui/core";
import { useField,Field} from "formik";
import { FC } from "react";

type IProps = {
    name:string,
    label:string,
    multiline?:boolean,
    rows?:number
    value:any
    onChange:any
    
}

const EtextField:FC<IProps> = ({name,label,multiline,rows,value,onChange}) => {
    const [field, mata]= useField(name)

    const configTextfiled ={
        ...field,
      multiline,
      rows,
        fullWidth: true,
        variant: 'outlined',
        label,
        error:false,
        helperText:"",
        value,
        onChange

    }


  

    if(mata && mata.touched && mata.error){
        configTextfiled.error=true;
        configTextfiled.helperText = mata.error;
    }
  return (
    <Field as={TextField} {...configTextfiled}/>
  )
}

export default EtextField