
import Text from '../components/Body/Text'
import Hero from '../components/Navbar/Hero'
import Navbar from '../components/Navbar/Navbar'
import Stats from '../components/Navbar/Stats'
import { Suspense, useState } from 'react'
import './App.css'
import Products from '../components/Body/Products'
import Carts from '../components/Body/Carts'
import { ToastContainer, toast } from 'react-toastify';
import Slides from '../components/Footer/Slides'
import Ready from '../components/Footer/Ready'
import Tail from '../components/Footer/Tail'

 const allWorks=async()=>{
   const res= await fetch("/works.json");

   return res.json();
 }


function App() {

  const allWorksPromise=allWorks();
  const [page,setPage]=useState("Products")
   const [selected,setSelected]=useState([]);

   function selectedSetter(work){

    toast.success(`${work.name} has been added`)
      const newSelected=[...selected,work]

      setSelected(newSelected)
   }

   function deleteWork(deletedOne){
     toast.error(`${deletedOne.name} has been deleted`)
    const newArr= selected.filter(single=>single!=deletedOne)
    setSelected(newArr)
   }


   function setProceed(){
    toast.info("You have purchased your items")
        setSelected([])
   }
     
  return (
    <>
      <Navbar selected={selected}></Navbar>
      <Hero></Hero>
      <Stats></Stats>
      <Text></Text>

      <div className='my-5 w-1/2 mx-auto flex gap-0 justify-center'>
        <button
      className={`${
       page === "Products"
      ? "bg-gradient-to-r from-purple-600 to-purple-700 text-white"
      : "bg-white text-black"}
       rounded-l-full px-6 py-3 font-medium hover:opacity-90 transition`} onClick={()=>setPage("Products")}>
       Products
           </button>

             <button className={`${page==="Carts"?"bg-gradient-to-r from-purple-600 to-purple-700 text-white":"bg-white text-black"} rounded-r-full px-6 py-3 font-medium hover:opacity-90 transition`}onClick={()=>setPage("Carts")}>
             Carts<span>({selected.length})</span>
      </button>
    
      </div>

      {
        page==="Products" &&  <Suspense><Products allWorksPromise={allWorksPromise} selectedSetter={selectedSetter}></Products></Suspense>
      }

      {
        page==="Carts" && <Carts selected={selected}  deleteWork={deleteWork} setProceed={setProceed}></Carts>
      }
      <ToastContainer />

      <Slides></Slides>
      <Ready></Ready>
      <Tail></Tail>
    </>
  )
}

export default App
