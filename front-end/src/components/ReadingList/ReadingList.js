import axios from 'axios'
import './Reading.css'
import React, { useState } from 'react'
import{
  ReadingContainer,
  Reader,
  ListWrapper,
  ReadCard,
  ReadList,
  List
} from './ReadingListStyler';

const ReadingList = ({words}) => {

  const [data, setData] = useState({
    book_name: ""
  })

  const handleChange = (e) => {
    const {name, value} = e.target
    setData({...data, [name]:value})

  }

  const submit = (e) =>{
    e.preventDefault()
    console.log(data)

    axios.post("http://localhost:9292/reading", {
      book_name: data.book_name
    })
    .then(response => {console.log(response)})
  }
  const remove = (e) =>{
    axios.delete("http://localhost:9292/reading", {

    })
  }
  return (
    <div>
    <form>
    <label className='text-holder'>
    Reading list 
    <input type="text" name="book_name" placeholder='type here' onChange={handleChange}/>
  </label>
  <button className='adder-btn' onClick={submit}>Add to list</button>
 
</form>



<div className="readerlist" >
<ReadingContainer>
<ListWrapper>
{words.map((read,  index) =>{
return (
  <ReadCard key={index}>
  <ReadList>
  <List>
  <ul>
  <li>{read.book_name}
  </li>
  </ul>
  </List>
  <button className='editor-btn'>Edit</button>
  <button className= 'deleter-btn' onClick={remove}>Delete from list</button>
  </ReadList>
  
  </ReadCard>
)
})}

</ListWrapper>
</ReadingContainer>

</div>
    </div>
  )
}

export default ReadingList