import Class from "./InfoBlocksV2.module.sass"
import Block from "../ui/BlockV2"
function InfoBlocksV2({data}) {
    return <>        
        <div className={Class.InfoBlocks}>
            {data.map((block, index)=>{
                return <Block key={index} data={block}/>
            })}
        </div>
    </>
}
export default InfoBlocksV2

// Data formate

// data = [
//     {icon: "", title: "", discription: ""},
//     {icon: "", title: "", discription: ""}
// ]