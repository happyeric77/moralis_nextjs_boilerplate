import Class from "./NumberInputForms.module.sass"
import BulletPoints from "../ui/BulletPoints"
function NumberInputForms({data}) {
    return <>
        <div className={Class.formSection}>
            {data.map((form, index)=>
                <div className={Class.formItem} key={index}>
                    <div className={Class.label}><BulletPoints data={[{content: form.label}]} /></div>
                    <input type="text" onChange={form.callback} placeholder={form.placeholder} className={Class.inputForm} ref={form.ref}/>
                </div>
            )}
        </div>
    </>
}
export default NumberInputForms

// data format example

// const numberInputFormData = [
//     {label: "Name", callback: getTokenName, placeholder: "Input token name"},
//     {label: "Symbol", callback: getTokenSymbol, placeholder: "Input token symbol"},
//     {label: "Decimal", callback: getTokenDecimal, placeholder: "Input token Decimal"},
//     {label: "Total Supply", callback: getTotalSupply, placeholder: "Input token supply"},
//     {label: "Tax Fee", callback: getTaxFee, placeholder: "Input tax fee"},
//     {label: "Burn Fee", callback: getBurnFee, placeholder: "Input burn fee"},
//     {label: "Max Transfer Amount", callback: getMaxTrans, placeholder: "Input max transfer amount"}
// ]