import './index.scss';

interface Props {
    children: React.ReactNode;
    type?: 'standart' | 'large' | 'inline';
    gap?: React.CSSProperties['gap'];
    columns?: React.CSSProperties['gridTemplateColumns'];
    className?: string;
    style?: React.CSSProperties;
}

const Grid = ({ children, type = 'standart', gap, columns, className = '', style = {} }: Props) => {
    return (
        <div
            className={`grid ${type === 'large' ? 'grid--large' : ''} ${type === 'inline' ? 'grid--inline' : ''} ${className}`}
            style={{ gap: gap, columns: columns, ...style }}
        >
            {children}
        </div>
    );
};

export default Grid;
