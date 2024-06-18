import CurrenciesItem from "./CurrenciesItem";
import { NewsItem } from "./NewsItem";

import "./news.css";

interface INewsItem {
	src: string,
	href: string,
	text: string
}

interface ICurrencles {
	title: string,
	value: string,
	change: string
}

interface INews {
	news: INewsItem[]
	list: ICurrencles[]
}


/**
 * Этот компонент формирует раздел новостей
 */
export const News = ({news, list}: INews) => {
	const date = new Date();

	const options: Intl.DateTimeFormatOptions = {
		day: 'numeric',
		month: 'long',
		weekday: 'long',
		hour: 'numeric',
		minute: 'numeric',
	};
	
	const formatter = new Intl.DateTimeFormat('ru-RU', options);
	const formattedDate = formatter.format(date);

	return (
		<div className="news-container">
			<div className="header">
				<a href="http://">Сейчас в СМИ</a>
				<a href="http://">В Германии</a>
				<a href="http://">Рекомендуем</a>
				<span className="date">{formattedDate}</span>
			</div>
			<ul className="news">
				{news.map((news, index) => {
					return <NewsItem
						key={index}
						src={news.src}
						href={news.href}
						text={news.text} />
				})}
			</ul>
			<ul className="currencies">
				{list.map((currencies, index) => {
					return <CurrenciesItem
						key={index}
						title={currencies.title}
						value={currencies.value}
						change={currencies.change} />
				})}
			</ul>
		</div>
	)
}
