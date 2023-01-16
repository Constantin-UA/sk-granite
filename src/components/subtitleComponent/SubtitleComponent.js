import './subtitleComponent.scss';
function SubtitleComponent({ subtitle = '' }) {
	return <div className="subtitle">{subtitle}</div>;
}
export default SubtitleComponent;
