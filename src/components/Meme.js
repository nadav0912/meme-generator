import React from "react";

function Meme() {
  const [allMemes, setAllMemes] = React.useState([]);

  // Set allMemes to the memes array from the Api
  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  const [memeData, setMemeData] = React.useState({
    topText: "",
    buttomText: "",
    memeImg: "https://i.imgflip.com/gk5el.jpg",
  });

  function handleTextChange(event) {
    const { name, value } = event.target;
    setMemeData((prevMemeData) => {
      return {
        ...prevMemeData,
        [name]: value,
      };
    });
  }

  function randomMemeImg() {
    const randomUrl = allMemes[Math.floor(Math.random() * allMemes.length)].url;

    setMemeData((prevMemeData) => {
      return { ...prevMemeData, memeImg: randomUrl };
    });
  }

  return (
    <main>
      <div className="form">
        <input
          className="form--input"
          placeholder="top input"
          type="text"
          onChange={handleTextChange}
          value={memeData.topText}
          name="topText"
        />
        <input
          className="form--input"
          placeholder="top input"
          type="text"
          onChange={handleTextChange}
          value={memeData.buttomText}
          name="buttomText"
        />
        <button onClick={randomMemeImg} className="form--button">
          Get a new Meme image
        </button>
      </div>
      <div className="meme">
        <img src={memeData.memeImg} className="meme--image" />
        <h2 className="meme--text top">{memeData.topText}</h2>
        <h2 className="meme--text bottom">{memeData.buttomText}</h2>
      </div>
    </main>
  );
}

export default Meme;
