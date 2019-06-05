import React from 'react';

// const withClass = (WrappedComponent, className) => {
//     return (props) => (
//         <div className={className}>
//             <WrappedComponent {...props} />
//         </div>
//     )
// }

const withClass = (WrappedComponent, className) => {
    return class extends React.Component{
        render(){
            return (
            <div className={className}>
                <WrappedComponent {...this.props} />
            </div>
            )
        }
    }   
}

export default withClass;