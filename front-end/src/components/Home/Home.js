import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h1>intelligenc3.org</h1>

      <section className='about'>
        <h2 class="headings">Our scope of work</h2>
        <div class="row">
            <div class="box1">
                <h3 class="headings">Terrorism</h3>
                <p>Attacks could be indiscriminate in places frequented by foreigners including
                     hotels, bars, restaurants, sports bars and nightclubs, sporting events, supermarkets
                     , shopping centres, commercial buildings, coastal areas including beaches, government
                      buildings including Embassies, airports, buses, trains and other transport hubs. Places
                    of worship including churches and mosques have also been targeted. British nationals are
                    advised to be extremely vigilant in these areas. You should avoid regular patterns of 
                    movement and aim to travel during daylight hours.</p>
                    <button>Reviews</button>
            </div>
            <div class="box2">
                <h3 class="headings">Terrorism</h3>
                <p>The main terrorism threat is from extremists linked to Al Shabaab, a militant group in 
                    Somalia opposed to the Somali government. Al Shabaab has issued public threats against
                     Kenya due to Kenya’s military intervention in Somalia. The Kenyan authorities have 
                     increased security to counter potential reprisal attacks by Al Shabaab. There is some
                      evidence of growing support for Daesh (formerly referred to as ISIL) in Kenya. </p>
            </div>
            <div class="box3">
                <h3 class="headings">Human Trafficking</h3>
                <p>The Government of Kenya does not fully meet the minimum standards for the elimination 
                    of trafficking but is making significant efforts to do so. The government demonstrated
                     overall increasing efforts compared to the previous reporting period, considering the
                      impact of the COVID-19 pandemic on its anti-trafficking capacity; therefore Kenya remained
                       on Tier 2. These efforts included increasing the number of investigations and prosecutions
                        of trafficking crimes; convicting more traffickers; increasing personnel dedicated to
                         specialized anti-trafficking police units; and launching a new hotline to report 
                         trafficking crimes.</p>
            </div>
            <div class="box4">
                <h3 class="headings">Anti Drug Operations</h3>
                <p>A Joint Planning Cell was established in Tehran at the end of February this year. 
                    The three countries have nominated focal points for planning regional operations 
                    against trafficking of drugs and chemical precursors, guided by collection and 
                    analysis of criminal intelligence. The Joint Planning Cell was instrumental to 
                    the launch of this historical operation. It will continue to work in a pilot 
                    phase until permanent focal points from the three countries are appointed.

                    The Triangular Initiative is part of the UNODC-coordinated Rainbow Strategy to 
                    counter the threat posed by Afghan opiates. This strategy engages both Afghanistan 
                    and surrounding countries in finding solutions. It consists of several operational
                    plans targeting seven internationally agreed priority areas including border 
                    management, precursor chemicals, financial flows and drug abuse prevention 
                    and treatment.</p>
            </div>
            <div class="box5">
                <h3 class="headings">Air and SHip security</h3>
                <p>U.S. policies and strategies for protecting air cargo have focused on two main 
                    perceived threats: the in-flight detonation of explosives concealed in an air 
                    cargo shipment and the hijacking of a large all-cargo aircraft for use as a 
                    weapon to attack a ground target such as a major population center, critical
                    infrastructure, or a critical national security asset. Additionally, there 
                    is concern that chemical, biological, or radiological agents or devices that
                    could be used in a mass-casualty attack in the United States might be 
                    smuggled as international air cargo.</p>
            </div>
            
        </div>
    </section>

    </div>
  );
};

export default Home;