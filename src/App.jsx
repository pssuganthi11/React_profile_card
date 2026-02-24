
import { useState } from "react";

import Header from "../src/component/Header";
import Footer from "../src/component/Footer";
import Heropage from "./component/Heropage";
import Todo from "./component/todolist/Todo";
import Cart from "./component/cart/Cart"
function App() {

      const [Role,setRole]=useState("Frontend developer");

  return (
    <>
      <div >
        <Header Role={Role}  />
        <Heropage Role={Role} setRole={setRole}/>
        <Todo />
        <Cart item={{
                  name: "jerry",
                  image:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2OsCVq-zhIKHU7kJX5M7vh--5KvIhsDHaQQ&s",
                  price: 250,
                }}/>
                <Cart item={{
                  name: "orange",
                  image:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXuh6SspTK58RBS-dGZF0xEkWwL_lF-wcQ6w&s",
                  price: 50,
                }}/>
                
        <Footer/>
      </div>
    </>
  );
}

export default App;
