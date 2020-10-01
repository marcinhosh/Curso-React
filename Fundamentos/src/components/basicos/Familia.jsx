import React from 'react';

export default props => {
    return (
        <div>
            {
                React.Children.map(
                    props.children,
                    (chlid) => {return React.cloneElement(chlid, props);}
                )
            }
        </div>
    )
}