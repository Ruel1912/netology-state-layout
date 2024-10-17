import { useState } from 'react'
import CardsView from './card/CardsView';
import ListView from './list/ListView';
import IconSwitch from './IconSwitch';

const Store = () => {
  
  const [icon, setIcon] = useState('view_list');

  const onSwitch = () => {
    console.log("change state here")
    setIcon(icon === 'view_module' ? 'view_list': 'view_module')
  };

  const products = [{
    name: "Nike Metcon 2",
    price: "130",
    color: "red",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "blue",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
  }, {
    name: "Nike free run",
    price: "170",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
  }, {
    name: "Nike Metcon 3",
    price: "150",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
  }];
  
  return (
    <div className='flex justify-center items-center flex-col gap-8 p-10'>
      <IconSwitch icon={icon} onSwitch={onSwitch} />
      {icon === 'view_module' 
        ? (<ListView items={products} />)
        : (<CardsView cards={products} />)
      }
    </div>
  )
}

export default Store