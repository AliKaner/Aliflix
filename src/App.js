import './App.css';

function App() {
  return (
    <div className="App">
        <div>
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
        <div className ="keys">
            <button className ="next-button">next</button>
            <button className = "back-button">back</button>

        </div>

    </div>
  );
}

export default App;
