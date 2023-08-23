import './index.scss';

interface Props {
    style?: React.CSSProperties;
}

const Footer = ({ style = {} }: Props) => {
    return (
        <footer className="footer" style={style}>
            <span>Проблемы со входом?</span>
            <span>Обратитесь в службу поддержки 5555</span>
        </footer>
    );
};

export default Footer;
