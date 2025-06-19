import { useParams } from "react-router-dom"

function ProductDetails3(props) {
    let {id}=useParams()
    

    return (
        <>
         <br><br></br></br>   
         <h1>id:{id}</h1>
        </>
    )
}
export default ProductDetails3;
