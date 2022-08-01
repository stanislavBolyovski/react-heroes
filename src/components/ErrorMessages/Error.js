import Button from "../../UI/Button";
import Container from "../../UI/Container";

import "./Error.css"
function Error(props) {

    return <>
        <div className="overlay" onClick={props.onClick}>
        </div>
        <div className="errorMessageContainer">
            <Container className="errorMessage">
                <h2>{props.title}</h2>
                <p>{props.message}</p>
                <footer>
                    <Button onClick={props.onClick}>Close</Button>
                </footer>
            </Container>
        </div>
    </>

}


export default Error;