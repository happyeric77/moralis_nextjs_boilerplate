import Class from "./InfoRaws.module.sass"
export default function InfoRaws({data}) {
    return <>
        <div className={Class.infoRaws}>
            <div className={Class.raws}>
                {data.map((raw, index)=>{
                    return  <div key={index} className={Class.raw}>
                            <div key={index} className={Class.rawTitle}>{raw.title}</div>
                            <div key={index} className={Class.rawContent}>{raw.content}</div>
                        </div>
                    
                })}
            </div>
        </div>
    </>
}

// data = [{title: "", content: ""}, {title: "", content: ""},]