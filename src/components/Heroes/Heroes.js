import { useState } from "react"
import AddHero from "../AddHeroComponent/AddHero"
import HeroList from "../HeroeListComponent/HeroList"
function Heroes() {
    const [heroList, setHeroesList] = useState(
        [
            {
                key: Math.random() * 10,
                name: 'Anti-Mage',
                age: '35',
                imgUrl: 'https://wallpapercave.com/wp/wp2031686.jpg'
            }
            ,
            {
                key: Math.random() * 10,
                name: 'Faceless Void',
                age: '999',
                imgUrl: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/faceless_void.png'
            }
        ]);

    function newHero(createdHero) {
        setHeroesList([createdHero, ...heroList])
    }
    function deleteHero(key) {
        let index = 0;
        for (const item of heroList) {
            if (item.key == key) {
                break;
            }
            index++;
        }
        heroList.splice(index, 1)
        setHeroesList([...heroList])
    }
    return (
        <div>
            <AddHero onNewHero={newHero} />
            <HeroList heroList={heroList} onDelete={deleteHero} />
        </div>
    )

}

export default Heroes