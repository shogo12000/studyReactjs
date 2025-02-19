import './Hero.css'

 

const Hero = ()=>{
    return (
        <div className="hero container" id="home">
            <div className='hero-text'>
                <h1>Lorem ipsum dolor sit amet</h1>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button className='btn'>Explore more <i class="fa-solid fa-arrow-right fa-2x"></i></button>                
            </div>
        </div>
    )
}

export default Hero