import"./styles/card.css"

function Button2(prop){
    return(
              <>
              <div className="butn" >
                <button className={prop.className}>{prop.names}</button>

              </div>
            </>
        
    )
}
export default Button2