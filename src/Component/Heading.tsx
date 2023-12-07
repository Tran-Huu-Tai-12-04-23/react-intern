type HeadingProps = {
    children: string;
};

function Heading(props: HeadingProps) {
    return <h1>{props.children}</h1>;
}

export default Heading;
