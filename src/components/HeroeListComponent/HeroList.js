import Container from "../../UI/Container";
import Hero from "./Hero";

function HeroList(props) {
    function getkey(key){
        props.onDelete(key)
    }
    return (
        <Container>
            {props.heroList.map(hero => {
                return <Hero heroObj={hero} key={hero.key} getkey={getkey}>
                    {props.children}
                </Hero>
            })}

        </Container>
    )
}

export default HeroList;