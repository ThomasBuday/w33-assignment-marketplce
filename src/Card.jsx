import cardPic from './assets/ai-cat.webp'
import Button from './Button';
import CardContent from './CardContent';

function Card(props){
    return(
        <div className="card">
            <img className="card-image" src={cardPic} alt="a card picture"></img>
            <CardContent {...props} />
            <hr></hr>
            <Button />
        </div>
    );
}

export default Card