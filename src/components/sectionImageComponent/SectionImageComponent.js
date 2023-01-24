import './sectionImageComponent.scss';
function SectionImageComponent({ img }) {
	return (
		<div className="sectionImage">
			<img className="sectionImage-img" src={img} alt="section logo" />
		</div>
	);
}
export default SectionImageComponent;
