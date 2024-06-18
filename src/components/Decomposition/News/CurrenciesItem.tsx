
interface ICurrencles {
	title: string,
	value: string,
	change: string
}

/**
 * Этот компонент возвращает для раздела Новости строку валют и ценных бумаг
 */
const CurrenciesItem = ({title, value, change}:ICurrencles) => {
	return (
		<li className="currencies-item">
			<p className="item title">{title}</p>
			<p className="item value">{value}</p>
			<p className="item change">{change}</p>
		</li>
	)
}

export default CurrenciesItem