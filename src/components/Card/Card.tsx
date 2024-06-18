import { ICard } from "./models/interfaces";
interface ICardEl {
	card: ICard
}
export const Card = ({ card }: ICardEl) => {
	const { title, text, link, image } = card;
	
	return (
		<div className="card" style={{ width: "18rem" }}>
			{image && <img src={image.src} className="card-img-top" alt={image.alt} />}			
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				<p className="card-text">{text}</p>
				<a href={link.href} className="btn btn-primary">{link.text}</a>
			</div>
		</div>
	)
}
