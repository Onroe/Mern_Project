import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">JF Repair Shop!</span></h1>
            </header>
            <main className="public__main">
                <p>Located in Nakawa City, JF Repair Shop  provides a trained staff ready to meet your tech repair needs.</p>
                <address className="public__addr">
                    
                    555 Special Drive<br />
                    
                    <a href="tel:+15555555555">(222) 222-2222</a>
                </address>
                <br />
                <p>Owner: Banda Balogo</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public