import '../../assets/styles/Button.css'

export default function Button({textBtn, marginTop}) {
    return (
        <div className={`container_button`} style={{marginTop:marginTop}} >
            <input type="submit" value={textBtn} />
        </div>
    )
}