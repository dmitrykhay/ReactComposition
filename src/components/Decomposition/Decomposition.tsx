import { News } from "./News";
import { Offer } from "./Offer";
import "./Decomposition.css";
import { Search } from "./Search";
import { Trailer } from "./Trailer";
import { Articles } from "./Articles";

const news = [
	{
		src: "https://imgholder.ru/16x16/fa5407/adb9ca&font=kelson",
		href: "http://",
		text: "Гладков сообщил о трех пострадавших при обстреле Белгородской области"
	},
	{
		src: "https://imgholder.ru/16x16/afa422/adb9ca&font=kelson",
		href: "http://",
		text: "МЧС: Число пострадавших в массовом ДТП в Новгородской области возросло до 16"
	},
	{
		src: "https://imgholder.ru/16x16/fa5407/adb9ca&font=kelson",
		href: "http://",
		text: "Axios: глава ОАЭ предложил Нетаньяху просить денег для палестинцев у Зеленского"
	},
	{
		src: "https://imgholder.ru/16x16/afa422/adb9ca&font=kelson",
		href: "http://",
		text: "Путин упростил получение автомобильных номеров"
	},
	{
		src: "https://imgholder.ru/16x16/fa5407/adb9ca&font=kelson",
		href: "http://",
		text: "Гладков сообщил о трех пострадавших при обстреле Белгородской области"
	},
]

const currenciesList = [
	{
		title: "USD",
		value: "90.87",
		change: "+0.09"
	},
	{
		title: "EUR",
		value: "92.67",
		change: "+0.05"
	},
	{
		title: "НЕФТЬ",
		value: "64.90",
		change: "+1.25%"
	},
]

const offer = {	
	src: "offer.png",
	href: "#",
	text: "Работа над ошибками",
	description: "Смотрите на Яндексе и запоминайте"
}

const searchData = {
	logo: "http://diplomstudent.net/wp-content/uploads/2022/07/Yandex2.jpg",
	header: [
		{
			href: "#",
      text: "Видео"
		},
		{
			href: "#",
      text: "Видео"
		},
		{
			href: "#",
      text: "Видео"
		},
		{
			href: "#",
      text: "Видео"
		},
		{
			href: "#",
      text: "Видео"
		},
	]
}

/**
 * Этот компонент собирает всю страницу
 */
export const Decomposition = () => {
	return (
		<>
			<div className="main-header">
				<News news={news} list={currenciesList} />
				<Offer data={offer} />
			</div>
			<Search searchData={searchData} />
			<Trailer href="#" src="/public/trailer.png" alt="Картинка" />
			<div className="articles">
				<Articles 
					articletitle={{
						text: "Погода",
						href: "#"
					}}
					articleitem={[
						{
							href: "#",
							img: "/weather-icon.png",
							title: "+17",
							description: "Утром +17, ночью +13"
						}
					]} />
				<Articles 
					articletitle={{
						text: "Карта Германии",
						href: "#"
					}}
					articleitem={[
						{
							href: "#",
							title: "Расписание",
						}
					]} />
				<Articles 
					articletitle={{
						text: "Посещаемое",
						href: "#"
					}}
					articleitem={[
						{
							href: "#",
							title: "Недвижимость - о сталинках",
						},
						{
							href: "#",
							title: "Маркет - люстры и светильники",
						},
						{
							href: "#",
							title: "Авто.ру - авто 500 000",
						},
					]} />
				<Articles 
					articletitle={{
						text: "Телепрограмма",
						href: "#"
					}}
					articleitem={[
						{
							href: "#",
							time: "02:00",
							title: "ТНТ.Best",
							description: "ТНТ"
						},
						{
							href: "#",
							time: "02:00",
							title: "Вести",
							description: "1 канал"
						},
						{
							href: "#",
							time: "02:00",
							title: "Этикет",
							description: "Культура"
						},
					]} />
				<Articles 
					articletitle={{
						text: "Эфир",
						href: "#"
					}}
					articleitem={[
						{
							href: "#",
							img: "/play-button-round-icon.png",
							title: "Управление как исскуство",
							description: "Успех"
						},
						{
							href: "#",
							img: "/play-button-round-icon.png",
							title: "Ночь в это время",
							description: "earthTV"
						},
						{
							href: "#",
							img: "/play-button-round-icon.png",
							title: "Музыка",
							description: "MuzTV"
						},
					]} />
			</div>
		</>
	)
}
