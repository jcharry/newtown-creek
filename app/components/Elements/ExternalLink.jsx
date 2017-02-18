import React from 'react';

class ExternalLink extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        const { url } = this.props;
        e.preventDefault();
        window.open(url, '_blank');
    }

    render() {
        const { url, style, cls } = this.props;
        return (
            <a style={style}
                className={cls || 'external-link'}
                onClick={this.handleClick}>
                {this.props.children}
            </a>
        );
    }
}

export default ExternalLink;

