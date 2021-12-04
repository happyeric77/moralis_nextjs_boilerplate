import Class from "./InfoColum.module.sass"
export default function InfoColum({data}) {
    return <>
        <div className={Class.infoColum}>
            {data.map((block, index)=>{
                return <div key={index} className={Class.block}>
                    <div className={Class.title}>{block.title}</div>
                    <div className={Class.content}>{block.content}</div>
                </div>
            })}
        </div>
    </>
}

// data = [{title: "", content: ""}, {title: "", content: ""}]