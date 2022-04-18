import Page from './components/Page';
import { Routes, Route, Link } from "react-router-dom";
import Todo from './Todo'
import Calculator from './Calculator';
import Navbar from './Navbar';

function App() {
    return (
        <>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="page" element={<Page />} />
        <Route path="calculator" element={<Calculator />} />
      </Routes>
      </>
    );
}

export default App;
