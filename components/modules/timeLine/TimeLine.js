import Class from "./TimeLine.module.css"
import TimeBock from "./TimeBlock";

function TimeLine({data}) {

    return <>
        <div className={Class.timeFrame}>
            <div className={Class.timeline}></div>
            <div className={Class.timeBlocks}>
                {timeData && timeData.map((timeBlock)=>{
                    return <div key={timeBlock._id} className={Class.timeBlock}> <TimeBock time={timeBlock.time} title={timeBlock.title} activityList={timeBlock.activityList} /></div>
                })}
            </div>
        </div>
    </>
}
export default TimeLine;


// const timeLineData = [
//     {time: 2017, title: "siejf", activityList: [
//         "lijeiaf ejila eij weaaw eiwoa",
//         "eiafj pwaojf pasoef pae",
//         "eifa fje, aopw"
//     ]},
//     {time: 2018, title: "siesf esa fs", activityList: [
//         "lijeiaf ejila eij weaaw eiwoa",
//         "eiafj pwaojf pasoef pae",
//         "eifa fje, aopw"
//     ]}
// ]