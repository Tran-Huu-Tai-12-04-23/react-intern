type BoxProps = {
    children: React.ReactNode;
};
function Box(props: BoxProps) {
    return <div>{props.children}</div>;
}

export default Box;
