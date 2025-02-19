import "./Footer.css";

export default function Footer() {
    return (
        <div className="footer">
            <div className="links">
                <a href="https://2socotra.com"><img className="logo-large" src="/logotext shape.png" alt="logo" /><img className="logo-small" src="/logo3.png" alt="logo" /></a>
                <ul>
                    <li><a href="https://2socotra.com/">Home</a></li>
                    <li><a href="https://2socotra.com/about/">About</a></li>
                    <li><a href="https://2socotra.com/contact/">Contact</a></li>
                    <li><a href="https://2socotra.com/booking/">Booking</a></li>
                    <li><a href="https://2socotra.com/privacy-policy/">Privacy Policy</a></li>
                    <li><a href="https://2socotra.com/cancellation-and-refund-policy/">Cancellation and Refund</a></li>
                </ul>
            </div>
            <p>© 2024 - 2SOCOTRA | Tour packages provider on Socotra Island</p>
        </div>
    )   
}
