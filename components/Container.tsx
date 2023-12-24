interface ContainerProps {
    className: any;
    children: React.ReactNode;
}
const Container: React.FC<ContainerProps> = ({ children, className }) => {
    return <section className={`container mx-auto ${className}`}>{children}</section>;
};

export default Container;