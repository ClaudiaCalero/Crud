import './TextInput.css';

export default function TextInput(props) {
    const text = props.text;
    const setText = props.setText;
    const placeholder = props.placeholder;
    function onChangeHandler(event) {
        setText(event.target.value);
        console.log(event.target.value);
    }
    return (
        <input className='input-task' value={text} type="text" placeholder={placeholder} onChange={(event) => onChangeHandler(event)} />
    )

}
