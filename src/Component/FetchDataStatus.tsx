type StatusProps = {
    status: 'loading' | 'success' | 'error';
};
function FetchData(props: StatusProps) {
    let message = '';

    if (props.status === 'loading') {
        message = 'loading...';
    } else if (props.status === 'success') {
        message = 'success fetch data';
    } else if (props.status === 'error') {
        message = 'error fetch data';
    }
    return (
        <div>
            <h1> Status : {message}</h1>
        </div>
    );
}

export default FetchData;
