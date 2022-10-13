import "./HomePage.css"

function HomePage() {
  return (
    <>
      <div className="home-container">
        <h1 className="instruction">Search for weather and add it to your Location List!</h1>
        <h2 className="review-1">Best weather app 2022! <div className="ppl"> - Navjeet C </div><div className="position">Full-Stack SWE, GA </div> </h2>
        <h2 className="review-2">We are using the same API! Nvm, its different <div className="ppl"> - Michael K </div><div className="position">Full-Stack SWE, GA</div></h2>
        <h2 className="review-3">GA's weather app of choice <div className="ppl"> - Rondell C </div><div className="position">Senior Software Engineer Instructor, GA</div> </h2>
        <img className="image-in-homepage" src="icons/01d.png"></img>
      </div>
    </>
  );
}

export default HomePage;