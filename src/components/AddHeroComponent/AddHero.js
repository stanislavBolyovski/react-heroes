import { useState } from "react";
import Button from "../../UI/Button"
import Container from "../../UI/Container"
import Input from "../../UI/Input"
import Error from "../ErrorMessages/Error";
import ReactDOM from "react-dom"
function AddHero(props) {
    const [errorMessage, setErrorMessage] = useState();
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    function nameChange(event) {
        setName(event.target.value)
    }
    function ageChange(event) {
        setAge(event.target.value)
    }
    function imgChange(event) {
        setImgUrl(event.target.value)
    }
    function addHero(event) {
        event.preventDefault();
        if (!name || !age || !imgUrl) {
            setErrorMessage({
                title: 'Empty fields',
                message: 'Please, enter data in the empty fields'
            })
            return
        }
        if (age <= 0) {
            setErrorMessage({
                title: 'Invalid age',
                message: 'Please, enter valid age'
            })
            return
        } else {
            let newHero = {
                key: Math.random() * 10,
                name: name,
                age: age,
                imgUrl: imgUrl
            }
            props.onNewHero(newHero)
            setName('')
            setAge('')
            setImgUrl('')
        }
    }

    function closeError() {
        setErrorMessage()
    }

    return (
        <form onSubmit={addHero}>
            <Container>
                <Input value={name} onChange={nameChange} placeholderText='Enter Hero name' />
                <Input value={age} onChange={ageChange} placeholderText='Enter Hero age' />
                <Input value={imgUrl} onChange={imgChange} placeholderText='Enter Hero image URL' />
                <Button type='submit'>Add Hero</Button>
            </Container>
            {errorMessage && ReactDOM.createPortal(errorMessage && <Error title={errorMessage.title} message={errorMessage.message} onClick={closeError}></Error>, document.getElementById("modal-root"))}

        </form>
    )
}

export default AddHero