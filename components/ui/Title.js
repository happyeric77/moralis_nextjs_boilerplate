import Class from "./Title.module.css"

function Title(props) {
    return <>
        <div className={Class.title}>{props.children}</div>
    </>
}
export default Title