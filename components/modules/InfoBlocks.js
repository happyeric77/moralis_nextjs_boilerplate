import Class from "./InfoBlocks.module.css"
import Block from "../ui/Block"
function InfoBlocks({data}) {
    return <>        
        <div className={Class.InfoBlocks}>
            {data.map((block, index)=>{
                return <Block key={index} data={block}/>
            })}
        </div>
    </>
}
export default InfoBlocks

// Data formate

// data = [
//     {icon: "", title: "", discription: ""},
//     {icon: "", title: "", discription: ""}
// ]