import Class from "./Subject.module.css"

function Subject(props){
    return<>
        <div className={Class.subject}>
            {props.children}
        </div>
    </>
}
export default Subject;