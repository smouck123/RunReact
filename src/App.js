import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: 'Rolls-Royce Cullinan',
          img: 'rolls.jpeg',
          desc: 'Авто повышенного комфорта, представительского класса. ',
          category: 'premium',
          price: '418'
        },
        {
          id: 2,
          title:'Lamborghini AVENTADOR',
          img:'Lambo.jpeg',
          desc:'Лимитированное авто, представленная нашими спонсорамию.',
          category:'super car',
          price:'325'
        },
        {
          id: 3,
          title:'Ferrari SF90 Spider',
          img:'ferra.jpeg',
          desc:'1000 л/с, Разгон 2,5 сек 0-100 км/ч, м/с 340 км/ч.',
          category:'elite',
          price:'325'
        },
        {
          id: 4,
          title:'Koenigsegg Agera R',
          img:'koen.jpeg',
          desc:'1115 л.с. , Двигатель Алюминиевый 5,0-литровый V8.',
          category:'race',
          price:'650'
        },
        {
          id: 5,
          title:'Nissan GT-R',
          img:'nissan.jpeg',
          desc:'Black Edition (3.8 AMT)',
          category:'old car',
          price:'309'
        },
        {
          id: 6,
          title:'Mercedes-Benz G-Класс',
          img:'merc.jpeg',
          desc:'2.9 л, 249 л.с., Дизель, АКПП, Полный (4WD)',
          category:'suv',
          price:'390'
        }
      ]
    }
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
  }
  render() {
  return (
    <div className="wrapper">
      <Header orders={this.state.orders} onDelete={this.deleteOrder} />
      <Items items={this.state.items} onAdd={this.addToOrder} />
      <Footer />
    </div>
  );
}

deleteOrder(id) {
  this.setState({orders: this.state.orders.filter(el => el.id !== id)})
}

addToOrder(item) {
  let isInArray = false
 this.state.orders.forEach(el => {
  if(el.id === item.id)
  isInArray = true
 })
 if(!isInArray)
  this.setState({ orders: [...this.state.orders, item] })
}
}

export default App;
