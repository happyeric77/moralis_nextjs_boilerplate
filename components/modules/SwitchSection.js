import Class from "./SwtichSection.module.css"
import {useState} from "react"
function SwtichSection(props) {


    const [section, setSection] = useState(props.data[0])

    function selectSection(evt) {
        props.callback(evt)
        // Get the value of selected label
        const tag = evt.target.innerHTML
        // deactive all labels
        const sectionEls = document.getElementsByClassName(`${Class.section}`)
        for (let i=0; i<sectionEls.length; i++) {
            sectionEls[i].classList.remove(`${Class.active}`)
        }
        // active the seleted label
        evt.target.classList.add(Class.active)

        // update section to the selected one
        props.data.forEach(section=>{
            if (section.label == tag){
                setSection(section)
            }
        })        
    }

    return <>
        <div className={Class.switchSection}>
            
            <div className={Class.sections}>
                {props.data.map((el,key)=>{
                    return <div 
                    key={key}
                    className={section.label===el.label ? `${Class.section} ${Class.active}` : Class.section} onClick={selectSection}>
                        {el.label}
                    </div>
                })}
            </div>
            
            <div className={Class.content}>
                {section.content}
            </div>

        </div>
    </>
}
export default SwtichSection;

// data = [{label: "??", content: "??"}]
// callback = {()=>{console.log("test")}}