import "./index.css"

const Card = props => {
    const {data} = props
  
    const {
      dishName,

      dishCalories,
      dishCurrency,
      dishPrice,
      dishImage,
      
    } = data

    return (
        <li className="item-card">
            <img src={dishImage} className="image"/>
            <p>{dishName}</p>
            <div className="card-div">
            <p>30 min  {dishCurrency} {dishPrice}</p>
            </div>
            <p>calories {dishCalories}</p>
        </li>

    )
}

export default Card;