import './index.scss';

interface Props {
    children: React.ReactNode;
    title?: string;
    subtitle?: string;
    className?: string;
    style?: React.CSSProperties;
    inline?: boolean;
}

const Card = ({ children, title = '', subtitle = '', className = '', style = {}, inline = false }: Props) => {
    return (
        <div className={`card ${className}`} style={{ ...style, flexDirection: inline ? 'row' : 'column' }}>
            {children}
            {title && <h4 className="card__title">{title}</h4>}
            {subtitle && <small className="card__subtitle">{subtitle}</small>}
        </div>
    );
};

export default Card;
