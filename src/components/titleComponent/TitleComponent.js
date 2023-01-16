import './titleComponen.scss';
function TitleComponent({ title = '' }) {
	return <div className="title">{title}</div>;
}
export default TitleComponent;
