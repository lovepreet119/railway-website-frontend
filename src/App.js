import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Layout from "./Components/Layout";
import PagenotFound from "./Components/PagenotFound";
import Users from "./Components/Users";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="users" element={<Users />} />
            <Route path="*" element={<PagenotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
