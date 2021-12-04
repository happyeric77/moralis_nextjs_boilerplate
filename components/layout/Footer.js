import Class from "./Footer.module.css"
// import kupadLogo from "../../src/kupadLogo.png"
import Image from "next/image"

function Footer({data}) {
    return <>
        <div className={Class.footer}>

            {/* <div className={Class.pages}>
                {data && data.pages.map((page)=>{
                    return <div key={page._id} className={Class.page}><a href={page.url}>{page.pageName}</a></div>
                })}
            </div> */}

            {/* <Image src={kupadLogo} width={190} height={80} layout={"fixed"}/> */}
            
            <div className={Class.socialIcons}>
                {/* <div className={Class.icon}><a href={data && data.github}><i className="fab fa-github-square fa-2x"></i></a></div> */}
                <div className={Class.icon}><a href={data && data.twitter}><i className="fab fa-telegram-plane fa-2x"></i></a></div>
                <div className={Class.icon}><a href={data && data.telegram}><i className="fab fa-twitter-square fa-2x"></i></a></div>
                <div className={Class.icon}><a href={data && data.medium}><i className="fab fa-medium fa-2x"></i></a></div>
            
            </div>

            <div className={Class.copyright}>{data && data.copyright}</div>
        </div>
    </>
}

export default Footer