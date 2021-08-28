import React from 'react';
import Button from './Button'

function Home() {
  return  (
    <div className='text'>
            
    <h1>Our Tours</h1>
    <div><hr id="underline"></hr></div>

    <article className="tour"><img  alt='Ireland' id="img1" src="https://dl.airtable.com/.attachments/a0cd0702c443f31526267f38ea5314a1/2447eb7a/paris.jpg" width="600px" height="400px" ></img> 

    <footer className="container-small" >

      <h4>Best of Dublin in 7 Days Tour</h4> 
      
      <p>
      Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale, the Dingle Peninsula, the Cliffs of Moher, the Aran Islands, Galway, Connemara, Giant's Causeway, and the compelling city of Belfast. All along the way, Rick's guides will share their stories to draw you in to the Emerald Isle, and the friendliness of the people will surely steal your heart. Join us for the Best of Ireland in 14 Days!        </p>
      <>
      <Button className="btn btn-primary btn-lg m-2" >Click Me!</Button>
      </>
      

    </footer>
    
    </article>
    <div><hr></hr></div>

    <article className="tour"><img  alt='ireland' id="img1" src="https://dl.airtable.com/.attachments/6c24084000a3777064c5200a8c2ae931/04081a3e/ireland.jpeg" width="600px" height="400px" ></img> 

<footer className="container-small" >
<h4>Best of Austria in 7 Days Tour</h4> 
<p>
Let's go where classical music, towering castles, and the-hills-are-alive scenery welcome you to the gemütlichkeit of Bavaria and opulence of Austria's Golden Age. Your Rick Steves guide will bring this region's rich history and culture to life in festive Munich, Baroque Salzburg, sparkling Lake Hallstatt, monastic Melk, the blue Danube, and royal Vienna — with cozy villages and alpine vistas all along the way. Join us for the Best of Munich, Salzburg & Vienna in 8 Days!  </p>
<>
<Button className="btn btn-primary btn-lg m-2" >Click Me!</Button>
</>


</footer>

</article>
<div><hr></hr></div>
<article className="tour"><img  alt='ireland' id="img1" src="https://dl.airtable.com/.attachments/27f6cbfe631e303f98b97e9dafacf25b/6bbe2a07/vienna.jpeg" width="600px" height="400px" ></img> 

<footer className="container-small" >
<h4>Best of Paris in 7 Days Tour</h4> 
<p>
Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days
</p>
<>
<Button className="btn btn-primary btn-lg m-2" >Click Me!</Button>
</>
 
</footer>

</article>

    </div> 
  ) ;
}

export default Home;