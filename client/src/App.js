import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import { GetAllComment } from "./Services/Comment-service";
import { CreateComment } from "./Services/Comment-service";
import { GetAllProduct } from "./Services/Product-service";
import { CreateProduct } from "./Services/Product-service";
import AppRouter from "./AppRouter";

function App() {
  const [comment, setComment] = useState({});
  const [all,setAll]=useState([]);
  const GetAll = async () => {
    await GetAllProduct().then((res) => {
      setAll(res)
    });
  };
  const onFieldChange = (e) => {
    const { name, value } = e.target;
    setComment();
    console.log(comment);
  };

  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
