
import './home.css'
import wave from '../../image/bg-pattern.png'
import Particles from 'react-particles-js';


function Home(){
   

    
    return (
        <section id="home">
           <div className="particle">
                    <Particles
                        params={{
                        "particles": {
                            "number": {
                                "value": 200,
                            },
                            "size": {
                                "value": 6,
                            }
                        },
                        "move": {
                            "enable":true,

                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "repulse",
                                }
                            }
                        }
                    }} />
                   
                   </div>
            <div className="home-sub">
                           
                <div className="home-sub-one">
                    <div className="home-content">
                        <h1>We help startups launch their products</h1>
                        <p>Etiam sed.Interdum consequat proin vestibulum class at.</p>
                        <span><i class="fal fa-play-circle"></i></span>
                        
                        
                    </div>
                </div>
                
            </div>
            <div className="wave">
                    <img src= {wave} alt="song" />

            </div>
            <div className="video">
                
                </div>
           
           
        </section>
    )
}
export default Home
