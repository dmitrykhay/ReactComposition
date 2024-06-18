export interface ICard {
	title: string,
	text: string,
	link: {
		text: string,
		href: string
	},
	image?: {
		src: string,
		alt: string
	}
}
