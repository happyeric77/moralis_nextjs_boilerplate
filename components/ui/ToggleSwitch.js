import Class from "./ToggleSwitch.module.css"

function ToggleSwitch({data}){
    return <>
    <div className={Class.toggleSwitch}>
        <label className={Class.switch} >
            <input type="checkbox" ref={data.ref} onChange={data.callback}/>
            <span className={`${Class.slider} ${Class.round}`}></span>
        </label>
    </div>
    </>
}
export default ToggleSwitch

// data = {ref: "example Ref", callback: "example callback"}