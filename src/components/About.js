import React from 'react';
import Button from './Button';

function About() {
    return   <div className='text'>
            
    <h1>About Us</h1>
    <div><hr id="underline"></hr></div>

    <article className="tour"><img  alt='Ireland' id="img1" src="https://www.notintown.net/old/hotdeal_pic/2019/traveltour1-1569852244.png" width="600px" height="400px" ></img> 

    <footer className="container-small" >

      <h4>This is What best describe us!</h4> 
      
      <p>
      Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale, the Dingle Peninsula, the Cliffs of Moher, the Aran Islands, Galway, Connemara, Giant's Causeway, and the compelling city of Belfast. All along the way, Rick's guides will share their stories to draw you in to the Emerald Isle, and the friendliness of the people will surely steal your heart. Join us for the Best of Ireland in 14 Days!        </p>
      <>
      <Button className="btn btn-primary btn-lg m-2" >Click Me!</Button>
      </>
      </footer>
      </article>


 

    </div> 
  }

  export default About;