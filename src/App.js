import React from 'react'

function Food({name, Image}){
  return (
    <div>
      <h1>I love {name}</h1>
      <img src={Image} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id:1,
    name: "kimchi",
    Image: "https://health.chosun.com/site/data/img_dir/2020/07/21/2020072103114_0.jpg"
  },
  {
    id:2,
    name: "gogi",
    Image: "https://cdn.mindgil.com/news/photo/202104/71169_7768_150.jpg"
  }
]

function renderFood(dish){
  return <Food key={dish.id} name={dish.name} Image={dish.Image} />
}

function App() {
  return (
    <div>
      {console.log(foodILike.map(renderFood))}
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
