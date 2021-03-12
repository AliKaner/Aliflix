
import './App.css';

function App() {
  return (
    <div className="App">

             <div className="tv-layer">
            <img className="television-background"
                 src="https://pngimg.com/uploads/tv/tv_PNG39232.png"
            />


                 <iframe className= "youtube-video"
                    src="https://www.youtube.com/embed/ldpKEr9yZd0" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    width="1188" height="679">
            </iframe>
        </div>



        <div className= "desk-layer">
            <button className ="next-button">next</button>
            <button className = "back-button">back</button>
            <img className="desk" width="1388" height="479" src="https://www.pngkey.com/png/full/5-55874_best-free-desk-png-image-transparent-office-desks.png"/>

        </div>

    </div>
  );
}

export default App;
