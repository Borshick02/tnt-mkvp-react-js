import './index.scss';

interface Props {
    children: React.ReactNode;
    title?: string;
    subtitle?: string;
    className?: string;
    style?: React.CSSProperties;
}

const Card = ({ children, title = '', subtitle = '', className = '', style = {} }: Props) => {
    return (
        <div className={`card ${className}`} style={style}>
            {children}
            <h3 className="card__title">{title}</h3>
            {subtitle && <small className="card__subtitle">{subtitle}</small>}
        </div>
    );
};

export default Card;
