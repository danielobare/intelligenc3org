import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Reviews = () => {
  const [data, setData] = useState("")
  useEffect(()=>{

  axios("http://localhost:9292/review")
  .then((response) => {setData(response.data)})
  },[])


  console.log(data)

  return (
    <div>
    <form>
  <label> 
  Country: 
  <select>
  <option value="congo">Congo</option>
  <option value="chad">Chad</option>
  <option selected value="somalia">Somalia</option>
  <option value="iraq">Iraq</option>
</select>
    Review: 
    <input type="text" name="review" />
    
  </label>
  <input type="submit" value="Submit" />
</form>


</div>
  )
}

export default Reviews