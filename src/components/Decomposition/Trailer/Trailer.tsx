import "./trailer.css";

interface ITrailer {
	href: string,
  src: string,
  alt: string,
}

/**
 * Компонент показывает блок с трейлером фильма
 */
export const Trailer = ({href, src, alt}: ITrailer) => {
	return (
		<div className="trailer-container">
			<a href={href}><img className="trailer-img" src={src} alt={alt} /></a>
		</div>
	)
}
