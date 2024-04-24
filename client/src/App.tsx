import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./containers/Home";
import HandleRedirect from "./containers/HandleRedirect";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:shortId" element={<HandleRedirect />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
