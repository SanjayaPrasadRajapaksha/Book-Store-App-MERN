import React, { useEffect, useState } from 'react'

function FavoriteBooks() {
    const FavoriteBooks = () => {

        const [books, setBooks] = useState([]);

        useEffect(() =>{
            fetch("http://localhost:3000/all-books").then(res => res.json()).then(data => console.log(data))
        },[]);
    }
  return (
    <div>FavoriteBooks</div>
  )
}

export default FavoriteBooks