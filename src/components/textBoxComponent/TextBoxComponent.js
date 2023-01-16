import './textBoxComponent.scss';
function TextBoxComponent({ text = '' }) {
	return (
		<div className="text-box">
			<div className="text">{text}</div>
		</div>
	);
}
export default TextBoxComponent;
