import { Card } from "./Card";
import { ICard } from "./models/interfaces";
import { v4 } from "uuid";

interface IList {
	list: ICard[]
}
export const Cards = ({list}: IList) => {
	
	return (
		<>
			{list.map((card) => {return (<Card key={v4()} card={card} />)})}
		</>
	)
}
