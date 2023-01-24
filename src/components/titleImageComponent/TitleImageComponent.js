import './titleImageComponent.scss';
function TitleImageComponent({ img }) {
	return (
		<div className="titleImageComponent">
			<img src={img} alt="section logo" />
		</div>
	);
}
export default TitleImageComponent;
