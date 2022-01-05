import Navbar from './Navbar'
import Home from './Home'
function App() {
  // const rita = 'Rita is a great girl'
  // const likes = 120
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
      {/* <h1>{rita}</h1>
      <p>I liked her pictures {likes} times </p> */}
    </div>
  )
}

export default App
