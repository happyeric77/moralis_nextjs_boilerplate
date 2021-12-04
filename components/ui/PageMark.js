import Class from "./PageMark.module.sass"

export default function PageMark({data}) {
    return <>
        <div className={Class.mark}>
            <div className={Class.logo}>{data.img}</div>
            <div className={Class.right}>
                <div className={Class.title}>{data.title}</div>
                <div className={Class.icons}>{data.icons.map((icon, index)=>{
                    return <a className={Class.icon} key={index} href={icon.url}>{icon.icon}</a>
                })}</div>
            </div>
        </div>
    </>
}

// data = {img: "", title: "", icons: [{icon: "", url: ""},{icon: "", url: ""}]}