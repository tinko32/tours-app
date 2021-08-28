import Button from 'react-bootstrap-button-loader';

import React from 'react';

function LoaderButton() {
    return <Button loading={this.state.loading}>Press me!</Button>;

}

export default LoaderButton;