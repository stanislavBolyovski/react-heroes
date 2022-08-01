import "./Input.css"

function Input(props){
    return (
        <input value={props.value} onChange={props.onChange} placeholder={props.placeholderText}></input>
    )
}

export default Input;