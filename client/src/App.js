import logo from './logo.svg';
import {useState} from 'react'
import './App.css';
import {GetAllComment} from './Services/Comment-service'
import {CreateComment} from './Services/Comment-service'
import {GetAllProduct} from './Services/Product-service'
import {CreateProduct} from './Services/Product-service'

function App() {
  const [comment,setComment]=useState({})
  const onFieldChange = (e) => {
    const { name, value } = e.target;
    setComment()
    console.log(comment)  
  };
  const MakeComment= async()=>{
    console.log(comment);
await CreateProduct(comment).then(()=>{alert("comment sent")})

}

  return (
    <div className="App">

<input type="text" name="Description" onChange={onFieldChange}></input>
<button onClick={MakeComment}>get</button>
    </div>
  );
}

export default App;
