import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Just Hardware Repairshop !</span></h1>
            </header>
            <main className="public__main">
                <p>Located in Kampala City, the repair shop  provides a trained staff ready to meet repair needs for our flagship products.</p>
                <address className="public__addr">
                Just Hardware Repairshop <br />
                    6th Street Industrial Area<br />
                    Nakawa<br />
                    <a href="tel:+15555555555">(555) 555-5555</a>
                </address>
                <br />
                <p>Owner: Ogundipe</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public