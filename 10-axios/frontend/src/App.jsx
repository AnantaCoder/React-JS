
import { useState,useEffect } from 'react'
import './App.css'
// import { use } from 'react'
import axios from 'axios'


function App() {
const [products,error,loading , search,setSearch]  = CustomReactQuery('api/products')
if (error) {
  return <h1>Something went wrong</h1>
}
// if (loading) {
//   return <h1>Loading...</h1>
// }

  return (
    <>
    <h1>Chai Our API in React</h1>
    <input
      type="text"
      placeholder="Search products..."
      value={search}
      onChange={(e) => setSearch(e.target.value)} // Update search state
    />
    {loading && <h1>Loading...</h1>}
    {error && <h1>Something went wrong...</h1>}
    {!loading && <h2>Number of Products: {products.length}</h2>}
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  </>
  )
}

export default App

const CustomReactQuery= (urlPath)=>{
  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)
  const [loading,setLoading] = useState(false)
  const [search, setSearch] = useState('')
  useEffect(() => {
    // fetch('/api/products')
    // .then((res) => res.json())
    // .then((data) => setProducts(data))
    // async function fetchProducts() {
    //   const { data } = await axios.get('/api/products')
    //   setProducts(data.length)
    // }
    // fetchProducts()
  
    // this is immediate invoked function
    const controller = new AbortController();
    const signal = controller.signal;
    // iffie function ; is a imp thing 
    ;(async()=>{
      try {
        setLoading(true)
        const response = await axios.get(urlPath,{
          params:{
            search
          },
          signal
        })
        console.log(response.data);
        setProducts(response.data)
        setLoading(false)
      } catch (error) {
        if(axios.isCancel(error)){
          console.log('Request cancelled',error.message);
          return
        }
        setError (true)
        console.error(error);
        setLoading(false)
        
      }
      // cleanup function is a function that is returned from the useEffect hook and is called when the component is unmounted or before the useEffect hook is called again.
      return () => {
        // this method is used to get the controller to abort the request and get data in a proper sequence "race condition"
        controller.abort()
        console.log('cleanup');
      }
    })()
  }
  , [urlPath,search])
  return [products,error,loading,search,setSearch]
}