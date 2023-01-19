import React, {useState, useRef} from 'react'
import './body.css'

const Body = () => {
  const [joke, setJoke] = useState("");
  const [image, setImage] = useState("");
  const form = useRef();
  const buttonSubmit = (e) => {
    e.preventDefault();
    getJoke();
    getRandomImage();
    e.target.reset();

  }
 
  const getJoke = () => {
    fetch("https://official-joke-api.appspot.com/random_joke").then(
      (response) => response.json())
      .then((data) => {
        setJoke("Random Joke for no reason:  " + data.setup + " ... " + data.punchline);
      });
  }

  const getRandomImage = () => {
    const endpoint = "https://api.unsplash.com/photos/random/?client_id=XxGyPIroWhkJGrsv-0rEdcWEKTxCBN9pzg3YK_84RsA";
    fetch(endpoint).then(
      (response) => response.json()
      ).then((data) => {
        setImage(data.urls.regular)
        console.log(data.urls.regular)
      });
  }

  return (
    <section className='body'>
      <h2> Enter prompt below</h2>
        
      <div>
        <form Ref={form} onSubmit={buttonSubmit}>
          <input type='text' name='prompt' placeholder='Enter Prompt here' required/>
          <button type='submit' className='btn'>Generate</button>
        </form>

        <div className="image_box">
          <img className="unsplash_image" alt="" src={image}/>
        </div>

        <div className="joke_container">
          {joke}
        </div>
        
      </div>
    </section>
  )
}

export default Body