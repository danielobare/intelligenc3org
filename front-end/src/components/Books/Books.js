import React, { useEffect, useState } from 'react'
import {
  BookContainer,
  BookWrapper,
  BookAuthor,
  BookButton,
  BookCard,
  BookDescription,
  BookHeading,
  BookImage,
  BookInfo,
  
} from './Bookstyler';

const Books = ({data}) => {
const [books, setBooks] =  useState ([])

useEffect (() => {
  fetch ('http://127.0.0.1:9292/books')
  .then (response => response.json())
  .then((products) =>
  // console.log (products)
  setBooks(products)
  )
}, [])

  return (
    <div>
    <BookContainer>
    <BookHeading>Narcotics</BookHeading>
    <BookWrapper>
    {books.map((book, index) =>{
      return(
        <BookCard key={index}>
        <BookImage src={book.imgurl} alt={book.alt}/>
        <BookInfo>
        <BookDescription>{book.description}</BookDescription>
        <BookAuthor>{book.author}</BookAuthor>
        <BookButton>Review</BookButton>
        </BookInfo>
        </BookCard>
      )

    })}
    </BookWrapper>
    </BookContainer>
    
    </div>
  )
  
}

export default Books