import React, {useState, useRef} from 'react'
import './body.css'

const Body = () => {
  const [joke, setJoke] = useState("");
  const [image, setImage] = useState("");
  const [apiData, setData] = useState("");
  const form = useRef();
  const buttonSubmit = (e) => {
    e.preventDefault();
    getJoke();
    getAIArtResponse();

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
    const rand_endpoint = "https://api.unsplash.com/photos/random/?client_id=XxGyPIroWhkJGrsv-0rEdcWEKTxCBN9pzg3YK_84RsA";
    fetch(rand_endpoint).then(
      (response) => response.json()
      ).then((data) => {
        setImage(data.urls.regular)
        console.log(data.urls.regular)
      });
  }

  const getAIArtResponse = () => {
    var api_endpoint = "http://127.0.0.1:8000/generate_image/"
    var userPrompt = document.getElementById('prompt').value
    api_endpoint = api_endpoint + userPrompt

    console.log(api_endpoint)
    fetch(api_endpoint).then(
      (response) => response.json()
    ).then((data) => {
      console.log(data)
      setData(data)
    }

    )
  }

  return (
    <section className='body'>
      <h2> Enter prompt below</h2>
      <p>
        For example, submitting the prompt: "A big white dog" will inverse the prompt 
        to "A small black dog" and generate and AI image of that inverted prompt
      </p>
        
      <div>
        <form Ref={form} onSubmit={buttonSubmit}>
          <input type='text' id='prompt' placeholder='Enter Prompt here' required/>
          <button type='submit' className='btn'>Generate</button>
        </form>

        <div className="image_box">
          <img className="unsplash_image" alt="" src={apiData.imageURL}/>
          <p id='original'>Original Prompt: {apiData.original_prompt}</p>
          <p id='inverted'>Inversed Prompt: {apiData.inverted_prompt}</p>
        </div>


        <div className="joke_container">
          {joke}
        </div>
        
      </div>
    </section>
  )
}

export default Body