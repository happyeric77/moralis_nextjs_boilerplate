import Class from "./BlockV2.module.sass"
function BlockV2({data}) {
    return <>
        <div className={Class.block}>
            <div className={Class.icon}>{data.icon}</div>
            <div className={Class.title}>{data.title}</div>
            <div className={Class.content}>{data.content}</div>
            <div className={Class.description}>{data.description}</div>
        </div>
    </>
}
export default BlockV2;