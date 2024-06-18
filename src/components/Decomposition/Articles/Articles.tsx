import "./articles.css";

interface IArticle {
		articletitle: {
			text: string,
			href: string
		},
		articleitem: {
			href: string,
			img?: string,
			time?: string,
			title: string,
			description?: string,
		}[]
}
	
/**
 * Компонент настраиваемый для блоков со статьями
 */
export const Articles = ({ articletitle, articleitem }: IArticle) => {

	return (
		<article className="article-container">
			<a className="article-title" href={articletitle.href}>{articletitle.text}</a>
			<ul className="article-content">
				{
					articleitem.map((item, index) => {
						return (
              <li key={index} className="content-item">
                <a href={item.href} className="item-link">
                  {item.img && <img className="item-icon" src={item.img} alt="" />}
                  {item.time && <p className="item time">{item.time}</p>}
                  <p className="item title">{item.title}</p>
                  {item.description && <p className="item description">{item.description}</p>}
                </a>
              </li>
            )
					})
				}
			</ul>
		</article>
	)
}
