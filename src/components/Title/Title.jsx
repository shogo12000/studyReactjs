import './Title.css'

const Title = ({title, h2, myid})=>{
    return(
        <div className="title" id={myid}>
            <p>{title}</p>
            <h2>{h2}</h2>
        </div>
    )
}

export default Title