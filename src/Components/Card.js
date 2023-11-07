export default function Card(props){
    console.log(props.item.tdate.from)
    return(
        <div className='card-holder'>
            <div className='card'>
                <img className='card-image'src={require(`../Images/${props.item.img}`)} alt={props.item.place}/>
                <div className='card-text'>
                    <div>
                        <img src={require('../Images/gps.png')} alt='gps-logo'/>  
                        <p>{props.item.country}</p>
                        <p>View on Google Maps</p>
                    </div>
                    <h3>{props.item.place}</h3>
                    <h6>{props.item.tdate.from}-{props.item.tdate.to}</h6>
                    <p>{props.item.description}</p>
                </div>
            </div>
        </div>
    )
}