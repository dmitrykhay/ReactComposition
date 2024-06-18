interface INewsItem {
	src: string,
	href: string,
	text: string
}

/**
 * Этот компонент возвращает для раздела Новости строку новости
 */
export const NewsItem = ({ src, href, text }: INewsItem) => {
	return (
		<li className="news-item">
			<img src={src}></img>
			<a href={href}>{text}</a>
		</li>
	)
}
