import '../styles/styles.css'
import Filters from '../Svg/Filters';
import Roomy from '../Svg/Roomy';
import Compact from '../Svg/Compact';
import Content from '../Cards/Content';
import Card from '../Cards/Card'

const Container = () => {

    return (
        <div className="container">
            <div className="container-fluid">
                    <div className="input-box">
                        <i class="fa fa-search" aria-hidden="true" />
                        &nbsp;&nbsp;
                        <input 
                            type="text" 
                            placeholder='Search from the world antique collection...'     
                        />
                    </div>
                    &nbsp;&nbsp;
                    <div className="filters">
                        <Filters />&nbsp;
                        FILTERS
                    </div>
                    <div style={{flex: 1}}></div>
                    <p className="surprise">🎉&nbsp;SURPRISE ME</p>
            </div>
            <div  className="sub-container">
                <div className="box"><Roomy /></div>
                &nbsp; &nbsp;
                <div className="box"><Compact /></div>
            </div>
            <br />
                <div className='box-wrapper'>
                    {Content.map(content => (
                        <div>
                            <Card
                                key={content.id}
                                image={content.image}
                                like={content.like}
                                view={content.view}
                                name={content.name}
                                content={content.content}
                                price={content.price}
                            />
                            <br />
                        </div>
                    ))}
                </div>
        </div>
    )
}


export default Container;