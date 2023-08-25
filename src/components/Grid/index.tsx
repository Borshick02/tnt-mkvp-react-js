import './index.scss';

interface Props {
    children: React.ReactNode;
    gap?: string;
    columns?: string;
    className?: string;
    style?: React.CSSProperties;
}

const Grid = ({ children, gap, columns, className = '', style = {} }: Props) => {
    return (
        <div className={`grid ${className}`} style={{ gap: gap, gridTemplateColumns: `repeat(${columns}, 1fr)`, ...style }}>
            {children}
        </div>
    );
};

export default Grid;
