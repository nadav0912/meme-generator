import troll_face from "../images/troll-face.png";

function Header() {
  return (
    <header>
      <img src={troll_face} className="header--img"></img>
      <h2 className="haeder--title">Meme Generator</h2>
      <h3 className="header--project">React Course - Project 3</h3>
    </header>
  );
}

export default Header;
