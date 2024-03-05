import {useState,useEffect} from 'react'

import CardItem from './components/CardItem'
import './App.css'

const cardImagesList = [

    {"src":"/img/duck.png",matchedStatus:false},
    {"src":"/img/eagle.png",matchedStatus:false},
    {"src":"/img/elephant.png",matchedStatus:false},
    {"src":"/img/houseplant.png",matchedStatus:false},
    {"src":"/img/parrot.png",matchedStatus:false},
     {"src":"/img/rabit.png",matchedStatus:false},
    {"src":"/img/tiger.png",matchedStatus:false},
    {"src":"/img/toucan.png",matchedStatus:false}
    
  ]

const App = () =>{
    const [cards, setCards] = useState([])
    const [cardChoice1, setCardChoice1] = useState(null)
    const [cardChoice2, setCardChoice2] = useState(null)
    const [disabled,setDisabled] = useState(false)
    const [gameStatus, setGameStatus] = useState(false)

    const shuffleCards = () =>{
        const shuffledCards = [...cardImagesList,...cardImagesList].sort(()=>Math.random()-0.5).map((card)=>({...card,id:Math.random()}))
   
        setCards(shuffledCards)

        setGameStatus(true)

    }

    const handleCardClick = (card) =>{
    //  console.log(card)
    cardChoice1 ? setCardChoice2(card):setCardChoice1(card)

    }

    useEffect(()=>{
        if(cardChoice1 && cardChoice2){
            setDisabled(true)
            if(cardChoice1.src === cardChoice2.src){
               // console.log("matched");
               setCards(prevCards =>{
                return prevCards.map(card =>{
                    if(card.src === cardChoice1.src){
                        return{...card,matchedStatus:true}
                    }
                    else{
                        return card
                    }
                })
               })
               reset();
            }
            else{
               // console.log("does not matched");
               setTimeout(()=> reset(),1000); 
            }

        }
    }, [cardChoice1, cardChoice2])
    console.log(cards);
    const reset = () =>{
        setCardChoice1(null)
        setCardChoice2(null)
        setDisabled(false)
    }
    


    return(
<div className='app-container'>

<h1 className='title'>Memory Match Game</h1>
    <button onClick={shuffleCards} className={gameStatus? "button2":"button1"}>{gameStatus? 'Start Again': "Start Game "}</button>
<div className='card-container'>
{cards.map(card=>(
    <CardItem   key={card.id} card={card} handleCardClick={handleCardClick} flipped={card === cardChoice1 || card === cardChoice2 || card.matchedStatus} disabled={disabled}/>
))}
</div>

</div>
    )

}
export default App