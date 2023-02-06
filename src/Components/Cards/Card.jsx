import '../styles/styles.css'
import Eye from '../Svg/Eye';
import Love from '../Svg/Love';

const Card = (props) => {

    const  { content, image, price, name, like, view } = props;


    return (
        <div className="box-card">
            <div className='first-bgBox'>
                <div className="Icons">
                    <div> <Love />&nbsp;{like}</div>
                    &nbsp;&nbsp;
                    <div><Eye />&nbsp;{view}</div>
                </div>
                <img src={image} alt='normal-img' className='productImage' />
            </div>
            <div className='name-price'>
                <p className='name'>{name}</p>
                <p className='price'>{price}</p>
            </div>
            <p className='content'>{content}</p>
        </div>
    )
}

export default Card;