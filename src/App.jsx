import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Login from "./Components/Login"
import Entry from "./Components/Entry"
import Welcome from "./Components/Welcome"

const App = () => {
  return (
<>
<Router>

<Routes>

<Route path="/" element={<Login/>}></Route>
<Route path="entry" element={<Entry/>}></Route>
<Route path="/welcome" element={<Welcome/>}></Route>
</Routes>

</Router>
</>  )
}

export default App;