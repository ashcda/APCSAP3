import './MainSection.css'
export const Card = ({product}) =>{
    return (
        <div className="card">
        <div className='card-text'>
        <h2>{product.author}</h2>
        <h4>{product.quote}</h4>
        </div>
        </div>
    )
}