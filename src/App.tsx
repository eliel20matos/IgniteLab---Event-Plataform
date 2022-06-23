import { gql, useQuery } from "@apollo/client"
import { useEffect } from "react"
import Header from "./components/Header"
import Lesson from "./components/Lesson"
import Sidebar from "./components/Sidebar"
import Video from "./components/Video"
import Evento from "./pages/Evento"

function App() {
  return (
    <div>
      <Evento/>
    </div>
  )
}

export default App
