import "./search.css";

interface ISearch {
	searchData: {
		logo: string;
		header: {
				href: string;
				text: string;
		}[];
	}
}

/**
 * Компонент отображает блок с поисковой строкой
 */
export const Search = ({searchData}: ISearch) => {
	const { logo, header } = searchData;
	
	return (
		<div className="search-container">
			<img className="logo" src={logo} alt="Яндекс" />
			<div className="seach-main">
				<ul className="search-header">
					{header.map((item, index) => {
						return (
              <li className="search-item" key={index}>
                <a href={item.href}>{item.text}</a>
              </li>
            )
					})}
				</ul>
				<div className="input-wrap">
					<input className="search-input" type="search" name="" id="" />
					<button className="search-btn" type="submit">Найти</button>
				</div>
				<p>Найдется все, например, фаза луны</p>
			</div>
		</div>
	)
}
