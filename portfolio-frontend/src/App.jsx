import "./App.scss"
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import BlogSection from './components/BlogSection'
function App() {

  return (
    <>
      <Navbar></Navbar>
      <hr />
      <section className="content-container">
        <Hero></Hero>
        <BlogSection></BlogSection>
      </section>
      
    </>
  )
}

export default App
