import React, { PureComponent } from 'react';
import Modal from 'react-responsive-modal';
import GammixOrange from '../../Vendor/gammix_oran.png';

interface stateInterface {
    open: boolean;
}

export class PatreonModal extends PureComponent<{}, stateInterface> {
    constructor(props: any) {
        super(props);
        this.state = {
            open: true,
        };
    }

    componentDidMount() {
        this.setState({
            ...this.state,
            open: true,
        });
    }

    handleCloseModal = () => {
        this.setState({
            ...this.state,
            open: false,
        });
    };

    render() {
        return (
            <Modal
                open={this.state.open}
                onClose={this.handleCloseModal}
                center
            >
                <br />
                <br />

                <div style={{ fontSize: '1.3rem' }}>
                    <img
                        src={GammixOrange}
                        alt="Gammix Logo"
                        style={{ float: 'left', marginTop: '-40px' }}
                    />
                    <p style={{ marginTop: '30px' }}>
                        Please consider supporting me in{' '}
                        <a href="https://www.patreon.com/gammafp">Patreon</a> or donate with <a href="https://ko-fi.com/gammafp">ko-fi</a> to continue developing
                        these tools.
                    </p>
                </div>
            </Modal>
        );
    }
}

export default PatreonModal;
