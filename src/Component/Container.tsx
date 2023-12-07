type ContainerProps = {
    style: React.CSSProperties;
};
function Container(props: ContainerProps) {
    return <div style={props.style}></div>;
}

export default Container;
