import Class from "./Block.module.css"
function Block({data}) {
    return <>
        <div className={Class.block}>
            <div className={Class.icon}>{data.icon}</div>
            <div className={Class.title}>{data.title}</div>
            <div className={Class.description}>{data.description}</div>
        </div>

    </>
}
export default Block;

// data format

// infoBlockData = {
//     icon: "",
//     title: "",
//     description: "",
// }