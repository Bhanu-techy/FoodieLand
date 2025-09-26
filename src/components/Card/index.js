import "./index.css"

const Card = props => {
    const {data} = props
  
    const {
      dishName,

      dishCalories,
      dishDescription,
      dishCurrency,
      dishPrice,
      dishImage,
      dishAvailability,
    } = data

    return (
        <li className="item-card">
            <img src={dishImage} className="image"/>
            <p>{dishName}</p>
            <div className="card-div">
            <p>30 min  {dishCurrency} {dishPrice}</p>
            </div>
        </li>

    )
}

export default Card;