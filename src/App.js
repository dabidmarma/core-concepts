import logo from "./logo.svg";
import "./App.css";

function App() {

  const products = [
    {name: 'Photoshop', price: '20.99'},
    {name: "Illustrator", price: "20.99"},
    {name: "Allahvsoft", price:"20.99"}
]
  return (
    <div className="App">
      <header className="App-header">
      <Products product={products[0]}></Products>
      <Products product={products[1]}></Products>
      <Products product={products[2]}></Products>
      </header>
    </div>
  );
}


function Products(props){
  const productStyle = {
    border:'1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgrey',
    height: '250px',
    width: '250px',
    float: 'left',
  }
  const {name, price} = props.product;

  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h1>{price}</h1>
      <button>Buy Now</button>
    </div>
  )
}


export default App;
