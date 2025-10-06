import Count from "./Count";
import CountButton from "./CountButton";
import Reset from "./Reset";
import Title from "./Title";



export default function Card(){
    return(
    <>
    <div className="card">

<Title/>
<Count/>
<Reset/>
<CountButton/>


    </div>
    
    
    </>)
}