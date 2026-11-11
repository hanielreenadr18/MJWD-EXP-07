import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main">
        <Sidebar />
        <Content />
      </div>
      <Footer />
    </div>
  )
}

export default App
