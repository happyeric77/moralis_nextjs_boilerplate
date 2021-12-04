import Class from "./TimeBlock.module.css"

function TimeBock(props) {
    return <>
        <div className={Class.timeBlock}>
            <div className={Class.time}>{props.time}</div>
            <div className={Class.title}>{props.title}</div>
            <div className={Class.activities}>
                {props.activityList.map((activity)=>{
                    return <div key={activity} className={Class.activity}>{activity}</div>
                })}
            </div>
        </div>
    </>
}
export default TimeBock;