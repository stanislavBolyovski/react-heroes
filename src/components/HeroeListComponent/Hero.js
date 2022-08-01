import './Hero.css'

function Hero(props) {
    let hero = props.heroObj
    function removeClick() {
        props.getkey(hero.key)
    }

    return (
        <div className="hero">
            <h3>Name:{hero.name}</h3>
            <p>Age:{hero.age}</p>
            <img src={hero.imgUrl} width="100%"></img>
            <button className='close' onClick={removeClick}>x</button>
        </div>
    )
}

export default Hero;