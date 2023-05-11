
function Button1(prop){
    return(
              <>
            <button className={prop.className}>{prop.name?prop.name:"new"}</button>
            </>
        
    )
}
export default Button1