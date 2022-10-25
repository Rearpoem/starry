import logo from './logo.svg';
import './App.css';
import Index from "./pages/index";
import { Routes, Route } from "react-router-dom";
import MyTable from "./pages/MyTable";

function App() {
  const NotFound = () => {
    return <div>警告，非法入侵npm i @ant-design/pro-components --save</div>
  }

  return (
      // <Index/>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/table" element={<MyTable />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  );

}

export default App;
