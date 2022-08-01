import './Container.css'

function Container(props) {
    return (
        <div className={"containerComponent" + ` ${props.className}`}  >
            {props.children}
        </div >
    )
}

export default Container;