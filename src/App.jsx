import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import HomePage from './pages/HomePage/HomePage'
import ChatPage from './pages/ChatPage/ChatPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<HomePage/>} />
        <Route path = "/chat" element = {<ChatPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
