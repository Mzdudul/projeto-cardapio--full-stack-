import './Card.css';

interface CardProps {
    price: number;
    title: string;
    img: string;
}

export function Card({ price, title, img }: CardProps) {
    return (
        <article className="card" aria-label={`Prato ${title}`}>
            <figure className="card-media">
                <img className="card-image" src={img} alt={title} />
            </figure>

            <div className="card-content">
                <div className="card-header">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-price">R$ {price.toFixed(2)}</p>
                </div>

                <div className="card-actions">
                    <button className="card-btn" aria-label={`Pedir ${title}`}>Pedir</button>
                </div>
            </div>
        </article>
    );
}
