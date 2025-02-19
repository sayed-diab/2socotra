import "./Packages.css"

export default function Pricing() {
    const packages  = [
        {
            price: 999,
            days: 8,
            nights: 7,
            price10: 999,
            price5: 1199,
            couple: 1399,
            solo: 1599
        },
        {
            price: 650,
            days: 5,
            nights: 4,
            price10: 650,
            price5: 799,
            couple: 950,
            solo: 1199
        },
        {
            price: 799,
            days: 6,
            nights: 5,
            price10: 799,
            price5: 950,
            couple: 1099,
            solo: 1399
        },
       
        {
            price: 1350,
            days: 11,
            nights: 10,
            price10: 1350,
            price5: 1550,
            couple: 1699,
            solo: 2250
        }
            
    ]
    return (
        <section className="pricing">
                <h1>Packages</h1>
                <h2 className="title-tour">Private Tours</h2>
            <div className="container">
                {packages.map((pkg, index) => {
                    return <div className="card" key={index}>
                                <div className="ribbon-2"> Off 40٪</div>
                                <h2 className="solo">${pkg.price}</h2>
                                <div className="detal">
                                <h2>{pkg.days} Days - {pkg.nights} Nights</h2>
                                <p>Travelers (6-10): ${pkg.price10}</p>
                                <p>Travelers (3-5): ${pkg.price5}</p>
                                <p>Couple: ${pkg.couple}</p>
                                <p>Solo: ${pkg.solo}</p>
                                </div>
                                <a className="btn" href="https://2socotra.com/booking">Book Now</a>
                            </div>
                })}
                
            </div>
                <h2 className="title-tour">Group Tours</h2>
                <div className="card group">
                    <h2 className="solo">$999</h2>
                    <div className="detal">
                    <h2>Group Tour 8days</h2>
                    <p>Group Size: 6 to 14 pax</p>
                    <p>Feb 18 - Feb 25, 2025</p>
                    <p>Mar 18 - Mar 25, 2025</p>
                    </div>
                    <a className="btn" href="https://2socotra.com/booking">Book Now</a>
                </div>
        </section>
    )
}
