import Card from "./Card.jsx"
import img1 from "./images/faceit.svg"
import"./styles/card.css"
import Button2 from "./Button2.jsx"
import img2 from"./images/insure.svg"
import img3 from"./images/loop.svg"
import img4 from"./images/manage.svg"
import img5 from"./images/myhome.svg"
import img6 from"./images/account.svg"
import backg from"./images/bgheader.svg"


import './App.css'

function App() {
  
  
  
  const labels =["feature","css","html","hello"]
  const labels2=["html","css","javascript"]
  const button=[{name:"new",backc:"aqua"},{name:"featured",backc:"black"}]
  const butto=[{name:"new",backc:"aqua"}]
  const butt=[]
  const face=["backend","junior","Ruby","RoR"]
  const bord=[]
  const card=[
    {
      img:img1,
      name:"faceit",
      names:"Junior Stack Developer",
      namess1:"1d",
      namess2:".fulltime",
      namess3:".parrttime",
      button: button,
      label:face

    },
    {
      img:img2,
      name:"insure",
      names:"Junior Frontend Developer",
      namess1:"2d",
      namess2:".part time",
      namess3:".remote",
      button: butto,
      label:labels2
    },
    {
      img:img3,
      name:"loop studios",
      names:"full stack developer",
      namess1:"2d",
      namess2:".part time",
      namess3:".remote",
      button: butt,
      label:labels

    },
    {
      img:img4,
      name:"manage",
      names:"full stack developer",
      namess1:"2d",
      namess2:".part time",
      namess3:".remote",
      button: butt,
      label:labels

    },
    {
      img:img5,
      name:"my home",
      names:"full stack developer",
      namess1:"2d",
      namess2:".part time",
      namess3:".remote",
      button: butt,
      label:labels

    },
    {
      img:img6,
      name:"account",
      names:"full stack developer",
      namess1:"2d",
      namess2:".part time",
      namess3:".remote",
      button: butt,
      label:labels

    }
  ]
return(
  <>
    <img src={backg}className="bgi"/>
  <div className="bd">
    {
      card.map((card,idx)=>{
        return(
          <Card 
          key={idx}
          img={card.img}
          name= {card.name}
          names={card.names}
          label={card.label}
          button={card.button}
          namess1={card.namess1}
          namess2={card.namess2}
          namess3={card.namess3}
          />
        )
      })

    }
    
  </div>
  
  </>
)
  }

export default App
