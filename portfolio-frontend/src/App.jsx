import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
function App() {

  return (
    <>
      <Navbar></Navbar>
      <hr />
      <section className="content-container">
        <Hero></Hero>
      </section>
      
    </>
  )
}

export default App
