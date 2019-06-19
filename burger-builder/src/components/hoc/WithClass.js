import React from 'react';

// const withClass = (WrappedComponent, className) => {
//     return (props) => (
//         <div className={className}>
//             <WrappedComponent {...props} />
//         </div>
//     )
// }

const withClass = (WrappedComponent, className) => {
    const WithClass = class extends React.Component{
        render(){
            return (
            <div className={className}>
                <WrappedComponent ref={this.props.forwardRef} {...this.props} />
            </div>
            )
        }
    }   
    return React.forwardRef ((props, ref) => {
        return <WithClass {...props} forwardedRef = {ref } />
    } );
    // Explain what does this do in withClass HOC?
}

export default withClass;