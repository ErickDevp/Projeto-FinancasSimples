import "../assets/styles/HomePage.css";
import useLogout from "../hooks/useLogout";

export default function Home() {
    const {logout} = useLogout();

    return (
        <div>
            <h1>oi</h1>
            <button className="btn_logout" onClick={() => logout()}>Sair</button>
        </div>
    )
}