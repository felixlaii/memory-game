import React from 'react'
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
  return (
    <div>Cards</div>
  )
}
