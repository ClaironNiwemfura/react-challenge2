import Button1 from "./Button1.jsx"
import Button2 from "./Button2.jsx"
import"./styles/card.css"


function Card(props){
    return(
    <div className="container">
        <div className="left">
            <div className="image">
               <img src={props.img} alt="img" />
            </div>
            <div className="words">
              <div className="header">
                    <h3>{props.name?props.name:"profound"} </h3>
                    {/* <Button1 className="btn1"/>
                    <Button1 className="btn2"
                    name="featured" /> */}
             {
                props.button.map((item, idx)=>{
                    return (
                <Button1 
                key= {idx}
                name= {item}
                
                />
                          
                    )
                })
            }




              </div>
                <h4>{props.names?props.names:"senior frontend developer"} </h4>
                <div className="footer">
                    <p>{props.namess?props.namess:"1d"}</p>
                    <p>{props.namess?props.namess:". full time"}</p>
                    <p>{props.namess?props.namess:".USA only"}</p>
                    
                </div>
            </div>
        </div>
        <div className="right">
            {
                props.label.map((item, idx)=>{
                    return (
                        <Button2 className="b1"
                                key={idx}
                                names={item}
                        />
                    )
                })
            }



           
        </div>
    </div>
    )
}
export default Card