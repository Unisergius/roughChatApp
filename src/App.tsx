import './App.css'
import NavBar from './components/NavBar'
import ChatRoom from './components/ChatRoom'
 
function App() {

  return (
    <>
        <div className="flex flex-col h-screen justify-between bg-base-200">
          <NavBar></NavBar>
          <ChatRoom></ChatRoom>
        </div>
    </>
  )
}

export default App
