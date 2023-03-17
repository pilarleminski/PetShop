import "../styles/global.css"
import Link from "next/link"
import { useRouter } from "next/router"

export default function App({Component, pageProps}) {
    const router = useRouter()
    return (
        <>
            <div>
                <h1>PETSHOP CUTIEST</h1>
                <nav className="header-nav">
                    <ul>
                        <li>
                            <Link className={router.pathname == "/" ? "active" : ""} href="/">Home</Link>
                        </li>
                        <li>
                            <Link className={router.pathname == "/cadastrar" ? "active" : ""}  href="/cadastrar">Cadastrar</Link>
                        </li>
                        <li>
                            <Link className={router.pathname == "/consultar" ? "active" : ""} href="/consultar">Consultar</Link>
                        </li>
                    </ul>
                </nav>
                <Component {...pageProps} />
            </div>
        </>
    )
}