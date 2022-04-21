
import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Details from "./Components/Details";
import Preview from "./Components/Preview";
function App() {
  const [data,setData]=useState(null)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Details setData={setData} />}>  
      </Route>
      <Route path="/preview" element={<Preview data={data} />} />
    </Routes>
  </BrowserRouter>
   
  );
}

export default App;
