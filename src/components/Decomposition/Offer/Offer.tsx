import "./offer.css";

interface IOffer {
	data: {
		src: string,
    href: string,
    text: string,
    description: string
	}
}

/**
 * Компонент формирует Предложение от Яндекса справа от раздела Новости
 */
export const Offer = ({data}: IOffer) => {
	const {src, href, text, description} = data;
	return (
		<div className="offer-container">
			<img src={src} alt="" className="offer-image" />
			<a href={href} className="offer-link">{text}</a>
			<span className="offer-description">{description}</span>
		</div>
	)
}
