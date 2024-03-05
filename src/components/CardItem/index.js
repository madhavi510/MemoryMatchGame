
import './index.css'

const CardItem = (props) =>{
 
   // eslint-disable-next-line react/prop-types
   const {card,handleCardClick,flipped,disabled} = props
   
     function onCardClick() {
        if (!disabled) {
            handleCardClick(card)
        }

    }
    return(

    
<div className='card'>
        <div className={flipped? 'flipped':''}>
            <img src={card.src} alt="frontImg" className="cardImg"/>
            <img src='./img/cardcover.png' alt="cardCover" onClick={onCardClick} className='coverImg'/>
        </div>
    </div>


    )
}
export default CardItem
