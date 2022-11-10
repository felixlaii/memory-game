import { useState } from 'react'
import Card from './Card'

export default function Cards() {
    const [items, setItems] =useState([
        { id: 1, img: '/src/assets/images/html.png', stat: ""},
        { id: 1, img: '/src/assets/images/html.png', stat: ""},
        { id: 2, img: '/src/assets/images/css.png', stat: ""},
        { id: 2, img: '/src/assets/images/css.png', stat: ""},
        { id: 3, img: '/src/assets/images/javascript.png', stat: ""},
        { id: 3, img: '/src/assets/images/javascript.png', stat: ""},
        { id: 4, img: '/src/assets/images/sass.png', stat: ""},
        { id: 4, img: '/src/assets/images/sass.png', stat: ""},
        { id: 5, img: '/src/assets/images/react.png', stat: ""},
        { id: 5, img: '/src/assets/images/react.png', stat: ""},
        { id: 6, img: '/src/assets/images/responsive.jpeg', stat: ""},
        { id: 6, img: '/src/assets/images/responsive.jpeg', stat: ""},
        { id: 7, img: '/src/assets/images/rest-api.webp', stat: ""},
        { id: 7, img: '/src/assets/images/rest-api.webp', stat: ""},
        { id: 8, img: '/src/assets/images/nodejs.jpeg', stat: ""},
        { id: 8, img: '/src/assets/images/nodejs.jpeg', stat: ""}
    ].sort(() => Math.random() - 0.5))

    const [prev, setPrev] = useState(-1)

    function check(current){
        if(items[current].id == items[prev].id){
            items[current].stat = "correct"
            items[prev].stat = "correct"
            setItems([...items])
            setPrev(-1)
        }else{
            items[current].stat = "wrong"
            items[prev].stat = "wrong"
            setItems([...items])
            setTimeout(() => {
                items[current].stat = ""
                items[prev].stat = ""
                setItems([...items])
                setPrev(-1)
            }, 1000)
        }
    }

    function handleClick(id) {
        if(prev === -1){
            items[id].stat="active"
            setItems([...items])
            setPrev(id)
        }else{
            check(id)
        }
    }
  return (
    <div className="container">
        {items.map((item, index) => (
            <Card key={index} item={item} id={index} handleClick={handleClick} />
        ))}

    </div>
  )
}
