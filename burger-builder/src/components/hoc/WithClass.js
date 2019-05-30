const withClass = (className) => {
    return(props) => {
        <div className={className}>
            <WrappedComponent />
        </div>
    }
}