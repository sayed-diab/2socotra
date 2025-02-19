import { Collapse } from 'antd';
import "./Collapse.css"

export default function CollapseDiv() {
    const items = [
        {
          key: '1',
          label: 'Is Socotra safe to visit?',
          children:<div>
           <p>Yes, it is safe to travel to Socotra. 
              The island has always remained untouched by
              the conflict in western Yemen and has never been part
              of the civil war. Socotra offers a peaceful and secure environment, allowing visitors to explore its stunning landscapes and unique biodiversity without concern.</p>
          </div>
          },
        {
          key: '2',
          label: 'Why choose Traveling Socotra for my trip?',
          children: <div>
            <p>Traveling Socotra offers several advantages over the other agencies:</p>
            <ul className='list' >
                <li>We aim to travel sustainably (no litter left behind + we set up a local plastic collection initiative + we use local guides, who show you around in their backyard).</li>
                <li>We only put 2-3 people per car, so everyone gets a window seat. Other agencies often put 4 people per car, which is not comfortable.</li>
                <li>Our guides and drivers speak English. If you need a toilet break, you don’t need to hold it up until the next stop …</li>
                <li>Our logistics team sets up the camp for you every night. And we take a portable toilet & shower for your comfort.</li>
                <li>Our itinerary has been designed with international tourists in mind. We have carefully selected each stop for you.</li>
                <li>We use bigger Al-Qadi tents, which offer better ventilation and more comfort. Most agencies will use the standard Quechua tents, which are the cheapest and not adapted to Socotran weather.</li>
                <li>Our website allows you to book with the safety and insurance of your credit card. We don’t ask you to transfer a deposit through PayPal to an unknown country and/or pay in cash.</li>
            </ul>
            <p>Find out more on the <a href="https://2socotra.com/about/">About us</a> page.</p>
          </div>,
        },
        {
          key: '3',
          label: 'Where can I book the flights?',
          children: <div>
            <p>You cannot book the flights online. We will need to book them for you. You can add the return flight from Abu Dhabi during the booking process. The price is fixed at $950.</p>
            <p>This is a humanitarian flight operated by Emirates Aviation Services using a chartered plane from Air Arabia. The flight goes twice a week, every Tuesday and Friday. There are about 65 seats reserved for tourists on each flight. These flights sell out quite quickly, so don’t wait too long with your booking.</p>
            <p>When you book, we will confirm the flight availability within 3 working days. In the case that the flight is fully booked, you will have the option to choose new dates or be refunded. After the flight confirmation, it can still take 10-14 working days to get the actual tickets issued. This is a manual process and they are always very busy, so please be patient.</p>
          </div>,
        },
        {
          key: '4',
          label: 'Do I need a tourist visa to visit?',
          children: <div>
            <p>Yes. Everyone needs to get a visa. We will take care of this for you. You can add the visa during your booking process. The price is fixed at $150. We will request your tourist visa 3 weeks before your departure.</p>
          </div>,
        },
        {
          key: '5',
          label: 'What should I pack for a trip to Socotra?',
          children: <div>
            <p>Pack light, breathable clothing, sun protection, sturdy hiking shoes, a rain jacket, and any personal necessities, as amenities are limited. We will send you a full packing list before your departure.</p>
          </div>,
        },
        {
          key: '6',
          label: 'What type of tents will I sleep in?',
          children: <div>
            <p>We use the iconic Al-Qadi tents, which are more adapted to the Socotra weather than the standard Quechua tents (which are cheaper and widely used on the island). The Al-Qadi tents have 4 windows and allow for more ventilation. Remember, Socotra can get very hot and stuffy during the summer.</p>
            <p>Technically they are designed for 2 pax, however each person will get their own tent for more comfort and privacy. Each tent comes with a mattress, blanket and pillow. You don’t need to bring anything. For couples who prefer to sleep together, we can also provide a larger couples tent.</p>
            <p>Your tent will be set up for you by our team. Full service!</p>
          </div>,
        },
        {
          key: '7',
          label: 'What can I expect from the meals?',
          children: <div>
              <p>Our private chef uses fresh ingredients to cook a tasty meal 3 times a day. Remember, we are on a remote island, so not everything is available. However, we can get fresh locally-caught fish and free-range chicken every day. This will be complimented with rice or pasta and some vegetables. Add some seasoning and freshly laid eggs in the morning and voila, happy stomachs.</p>
              <p>If you have any allergies, or need vegetarian or vegan options, please let us know. We will try our best to accommodate.</p>
          </div>,
        },
        {
          key: '8',
          label: 'Can I charge my batteries?',
          children: <div>
            <p>All our 4×4 cars are equipped with a 12V sine wave inverter and a multi-plug, so you can charge your devices in the car – while driving. The multi-plug typically has 2x USB-A and 4x US type B plugs. So take a universal converter, to make sure you can connect. And then you should be good to charge your phone, camera batteries, drone batteries etc…</p>
            <p>Additionally, a power bank is never a bad idea!</p>
          </div>,
        },
        {
          key: '9',
          label: 'Are there any showers and toilets?',
          children: <div>
            <p>Some nights we’ll sleep in a campsite with basic showers and toilets. We’ll provide the toilet paper. You need to bring your own toiletries, shampoo and towel though.</p>
            <p>Other nights we are too remote and we’ll sleep on a nice spot in the middle of nowhere. Which means nature will be your toilet and rivers/pools will be your shower. Some guests like to bring wet wipes. Any toilet paper / wet wipes that are used, must be collected again as well. We do not allow any garbage in nature, even if it’s biodegradable.</p>
            <p>For group tours of min. 5 people, we’ll take a portable shower and portable toilet as well. For your comfort.</p>
          </div>,
        },
        {
          key: '10',
          label: 'Can I bring my drone to Socotra?',
          children: <div>
            <p>Socotra is probably one of the coolest locations to fly your drone. So definitely bring it. Be sure to add the ‘drone permit’ to your checkout, so we can register you and have you flying legally. You are still responsible for your own flights, of course. Do not disturb any other guests, we are all here to enjoy nature.</p>
            <p>Watch out, UAE does not allow drones inside the country. So when you travel with a drone, be sure to fly on Abu Dhabi. You will need to explain the purpose of the drone at immigration. If you stay in Abu Dhabi for a few nights prior to your flight to Socotra, the drone will be kept in the Abu Dhabi airport (for free). You can collect it again, when you have checked in for your Socotra flight.</p>
          </div>,
        },
        {
          key: '11',
          label: 'Is there mobile internet on Socotra?',
          children: <div>
            <p>You can buy an Etisalat tourist SIM in the Abu Dhabi airport. It only works in a few areas of the island. And even then, mobile internet is very very slow. This is part of what makes traveling to Socotra so unique and helps you be in the moment instead of scrolling through your phone.</p>
            <p>If you absolutely do need internet, we can provide a StarLink for your trip, which will allow 4G speeds all across the island.</p>
          </div>,
        },
        {
          key: '12',
          label: 'Can I use credit cards and ATMs on Socotra?',
          children: <div>
            <p>Socotra has limited banking facilities and the few ATMs usually don’t work. Our trips are all inclusive, so you don’t need any money on the island. However if you want to buy some souvenirs, it’s best to bring some cash in US dollars. Attention, the dollar banknotes must be issued in years of 2009, 2013 or 2017.</p>
          </div>,
        },
        {
          key: '13',
          label: 'How can I access medical services on Socotra?',
          children: <div>
            <p>We always have a first aid kit with us. It is recommended to bring any necessary medications you might need. Like for every trip abroad, a good travel health insurance is recommended.</p>
            <p>In case of emergencies, there is a hospital in the capital Hadiboh.</p>
          </div>,
        },
        {
          key: '14',
          label: 'What if I need to change my travel dates?',
          children: <div>
            <p>Sometimes things come up and you are forced to change your trip dates. Reach out to us and we will help you to reschedule your trip and flights. According to availability.</p>
            <ul className='list'>
                <li>Up to 3 months in advance, we can do this for free.</li>
                <li>Up to 2 months in advance, there will be a $300 fee, as your flight has already been booked.</li>
                <li>Within 2 months of your departure, there will be a $600 fee, as your flight + visa have already been processed and local preparations have been made.</li>
                <li>Within 10 days of your departure, no changes are allowed, you’ll need to book a new trip.</li>
            </ul>
          </div>,
        },
        {
          key: '15',
          label: 'I need to cancel my trip, what now?',
          children: <div>
            <p>In the unfortunate event that you need to cancel your trip, reach out to us immediately!</p>
            <p>We will help you to get a refund for your flights and visa. However, if you are within 3 months of your departure date, a $300 cancellation fee will always apply. Within 10 days of your departure, no refund is possible anymore though.</p>
            <p>Within 3 months, your trip payment itself is non-refundable. We recommend trying to change your travel dates instead.</p>
          </div>,
        },
      ];


    return (
        <div className="collapse">
            <div className="collapse-wraper">
            <h1>FAQs</h1>
            <Collapse className="collapse-item" accordion items={items} />
            </div>
        </div>
    )
}
