import {useState} from "react";
import './App.css';

function App() {
  const [text, setText] = useState("");
  const [lsetf, setLsetf] = useState([]);

  const Post = () => {
    const items = {
      id : lsetf.length + 1,
      comment : text,
    };

    setLsetf([...lsetf, items]);
    setText("");
  } 

  console.log(lsetf)
  console.log(text)

  return (
    <div className="Commenterholder">
      <br/>
      <span><input className="input" value={text} onChange={(e)=>{setText(e.target.value)
      console.log(text)
      }} placeholder="leave a comment"/>
      <button className="comment" onClick={()=>{Post()
      console.log('Have Posted')}}>Comment</button></span>

      {lsetf.map((props)=>(
        <div className="Commenter">
          <div>{props.id}.</div>
          <div>{props.comment}</div>
          <button className="deletebutn">Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;