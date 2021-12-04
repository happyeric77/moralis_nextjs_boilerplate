import Class from "./ProgressBar.module.sass"
export default function ProgressBar({data}) {
    return <>
        <div className={Class.progressBar}>
            <div className={Class.progressValue} style={{width: data.value + "%"}}></div>
        </div>
    </>
}