import Class from "./InputTextField.module.css"

function InputTextField({data}){
    return <>
        <input type="text" 
            ref={data.ref} 
            onChnage={data.callback} 
            className={Class.inputTextField} 
            placeholder={data.placeholder}
            style={{width: `${data.width}`}}
        />
    </>
}
export default InputTextField

// const inputTextFieldData = {
//     ref: referRef,
//     callback: null,
//     placeholder: null,
//     width: null (default 100%),
// }