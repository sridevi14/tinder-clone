
import React,{useState,useEffect} from 'react';
import TinderCard from 'react-tinder-card'
import './Tinder-Card.css';


import axios from './axios';
// import card1 from './assets/card1.jpg'
// import card2 from './assets/card2.jpeg'
// import card3 from './assets/card3.jpeg'
// import card4 from './assets/card4.jpeg'
 const TinderCards = () => {

  const onSwipe = (direction,name) => {
    console.log('You swiped: ' + name)
  }
  
  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + ' left the screen')
  }
   const [people, setPeople] = useState([])
   
   useEffect(() => {
     async function fetchData() {
       const req=await axios.get('/tinder/card');


       setPeople(req.data)
     }

     fetchData();
   },[]);
console.log(people)
  return (
    <div className="tinder-cards">
     <div className='tinder'>
     {people.map((person) => (
       
       <TinderCard key={person.id} onSwipe={(dir) => { 
         onSwipe(dir,person.name)
       }} onCardLeftScreen={() => onCardLeftScreen(person.name)} preventSwipe={['up', 'down']} className="swipe">

<div className="card" style={{ 
     backgroundImage: `url(${person.imageUrl})` 
         }}>
           <h4>{ person.name}</h4>
</div>
         

       </TinderCard>
     ))}
       
      </div>
     
</div>
  
  );
}
 
export default TinderCards;