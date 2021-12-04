import Class from "./Button2.module.sass"
function Button({data}) {
    return <>
        <div onClick={data.callback} className={Class.pageButton} style={{
            width: data.width ? data.width : "auto"
            }}>
            {data.components.map(compoennt=>compoennt)}
        </div>
    </>
}
export default Button

// data format 

// const logoutButtonData = {
//     components: [<i class="fas fa-sign-out-alt"></i>,<div className="disconnect">Logout</div> ],
//     width: null,
//     callback: logout
// }