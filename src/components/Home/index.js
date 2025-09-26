import { Component} from "react"
import Card from '../Card'

import "./index.css"

class Home extends Component{

    state = {details : [],info:[], category : []}

    componentDidMount(){
        this.getDetails()
    }

    getDetails = async () => {
    const url =
      'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details'
    const headers = {
      method: 'GET',
    }
    const response = await fetch(url, headers)
    const data = await response.json()

    const updatedData = data[0].table_menu_list.map(each => ({
      categoryDishes: each.category_dishes.map(item => ({
        dishName: item.dish_name,
        dishId: item.dish_id,
        dishCalories: item.dish_calories,
        dishDescription: item.dish_description,
        dishCurrency: item.dish_currency,
        dishPrice: item.dish_price,
        dishImage: item.dish_image,
        dishAvailability: item.dish_Availability,
        addonCat: item.addonCat,
      })),
      menuCategory: each.menu_category,
      menuCategoryId: each.menu_category_id,
    }))
    

     if(response.ok){
        this.setState({details : updatedData, category : updatedData[0], categorytwo : updatedData[0], info: data[0]})
     }

}

    render(){
        const {details, category, info, categorytwo} = this.state
        const {categoryDishes = []} = category
       const {table_menu_list} = info
       console.log(table_menu_list)
       
        return(
            <div className="container">
               
            <h1 className="heading">categories</h1>
            <ul className="category-list">
                {details.map(each => (
                    <li>
                        <button className="category">{each.menuCategory}</button>
                        </li>
                ))}
            </ul>
                <h1 className="head">Simple and taste recepies</h1>
            <ul className="dish-list">
                {categoryDishes.map(each => (
                    <Card data={each} key={each.id} />
                ))}
            </ul>

            </div>
        )
    }
}

export default Home;