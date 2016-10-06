import React from 'react';

export class CustomSvg extends React.Component {
    render() {
        return (
            <div>
                {this.props.content}
            </div>
        )
    }
}

export default CustomSvg;
