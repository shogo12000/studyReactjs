import './About.css'
import image3 from '../../assets/image3.png'

const About = ({setPlayState})=>{
    return(
        <div className='about'>
            <div className='about-left'>
                <img src={image3} alt="" className='about-img'/>
                <i className="fa-solid fa-play fa-3x" onClick={()=>setPlayState(true)}></i>
            </div>
            <div className='about-right'>
                <h3>Ut enim ad minim</h3>
                <h2>Duis aute irure dolor in reprehenderit in voluptate.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    )
}

export default About