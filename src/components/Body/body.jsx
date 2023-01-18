import React, {useState, useRef} from 'react'
import './body.css'

const Body = () => {
  const [joke, setJoke] = useState("")
  const form = useRef()
  const getJoke = (e) => {
    e.preventDefault();

    fetch("https://official-joke-api.appspot.com/random_joke").then(
      (response) => response.json())
      .then((data) => {
        setJoke("Random Joke for no reason:  " + data.setup + " ... " + data.punchline);
      });

    e.target.reset();
  }

  return (
    <section className='body'>
      <h2> Enter prompt below</h2>
        
      <div>
        <form Ref={form} onSubmit={getJoke}>
          <input type='text' name='prompt' placeholder='Enter Prompt here' required/>
          <button type='submit' className='btn'>Generate</button>
        </form>

        <div className="image_box">

        </div>
        
        <div className="joke_container">
          {joke}
        </div>
        
      </div>
    </section>
  )
}

export default Body