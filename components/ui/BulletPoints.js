import Class from "./BulletPoints.module.sass"
function BulletPoints({data}) {
    return <>
        <div className={Class.bulletPoints}>
            <div className={Class.points}>
                {data.map((point)=>{
                    return <div key={point.content} className={Class.point} ref={point.ref}>{point.content}</div>
                })}
            </div>
        </div>
    </>
}
export default BulletPoints

//data format: data = ["point1", "point2"]
//data format: data = [{content: "1", ref: ""}, {content: "2", ref: ""}]