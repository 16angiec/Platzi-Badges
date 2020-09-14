import React from 'react';

import './styles/Badge.css';
import confLogo from '../images/badge-header.svg'

class Badge extends React.Component {
    render() {
        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={confLogo} alt="Logo conferencia" />
                </div>

                <div className="Badge__section-name">
                    <img className="Badge__avatar" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y" alt="Avatar" />
                    <h1>Angie <br /> Cruz</h1>
                </div>

                <div className="Badge__section-info">
                    <h3>Frontend Student</h3>
                    <div>@nn</div>
                </div>

                <div className="Badge__footer">#platziconf</div>
            </div>
        )
    }
}

export default Badge;