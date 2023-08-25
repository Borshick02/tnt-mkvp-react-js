import './index.scss';

interface Props {
    children: React.ReactNode;
    gap?: React.CSSProperties['gap'];
    columns?: React.CSSProperties['gridTemplateColumns'];
    className?: string;
    style?: React.CSSProperties;
}

const Grid = ({ children, gap, columns, className = '', style = {} }: Props) => {
    return (
        <div className={`grid ${className}`} style={{ gap: gap, columns: columns, ...style }}>
            {children}
        </div>
    );
};

export default Grid;
