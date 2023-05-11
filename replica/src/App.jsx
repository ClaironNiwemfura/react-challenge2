import Card from "./Card.jsx"
import img1 from "./images/faceit.svg"
import"./styles/card.css"
import Button2 from "./Button2.jsx"
import img2 from"./images/insure.svg"


import './App.css'

function App() {
  const labels =["feature","css","html","hello"]
  const labels2=["robert","claron","angelo"]
  const button=["new","featured"]
  const butto=["new"]
  return (
    <div>
      <Card
      img={img1}
      name="profound"
      names="full stack developer"
      label={labels}
      button={button}
      />
       {/* {/* <Card
      img={img2}
      name="manage"
      names="full stack developer"
      label={labels2}

      
      /> */}
       <Card
      img={img2}
      name="manage"
      names="full stack developer"
      label={labels2}
      button={butto}
      /> 

  </div>
  )
}

export default App
