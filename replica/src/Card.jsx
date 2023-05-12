import Button1 from "./Button1.jsx"
import Button2 from "./Button2.jsx"
import"./styles/card.css"


function Card(props){
    return(
    <div className="container">
       <div className="left">
            <div className="image">
             <img src={props.img} />
            </div>
            <div className="words">
              <div className="header">
                    <h3>{props.name} </h3>
                    {/* <Button1 className="btn1"/>
                    <Button1 className="btn2"
                    name="featured" /> */}
             {
                props.button.map((item, idx)=>{
                return (
                <Button1 
                key= {idx}
                name= {item.name}
                backc={item.backc}
                />
                          
                    )
            }
                )
            }
            

              </div>
                <h4>{props.names} </h4>
                <div className="footer">
                    <p>{props.namess1}</p>
                    <p>{props.namess2}</p>
                    <p>{props.namess3}</p>
                    
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