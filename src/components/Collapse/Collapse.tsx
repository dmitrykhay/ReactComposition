import { useState } from "react";

interface IProps {
	collapsedLabel?: string,
	expandedLabel?: string
}

export const Collapse = ({ collapsedLabel = "Развернуть", expandedLabel = "Свернуть" }: IProps) => {
	const [show, setShow] = useState("none");

	const handleClickCollapsedLabel = () => {
		setShow("block");
  }
	const handleClickExpandedLabel = () => {
		setShow("none");
  }
	
	return (
		<>
			<p>
				<a onClick={handleClickCollapsedLabel} className="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
					{collapsedLabel}
				</a>
				<button onClick={handleClickExpandedLabel}  className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
					{expandedLabel}
				</button>
			</p>
			<div style={{ display: show }} className="collapse" id="collapseExample">
				<div className="card card-body">
					Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
				</div>
			</div>
		</>
	)
}
