

import Features from './components/Features'
import Hero from './components/Hero'
import Packages from './components/Packages'
import './App.css'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
function App() {


  return (
    <div className="App">
      <Hero />
      <Packages />
      <Features />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
