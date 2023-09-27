import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button';

import './button.css';
import './coupon-frame.css';

/**
 * Primary UI component for user interaction
 */
export const CouponFrame = ({ backgroundColor, title, subtitle, des, exp, tc, leftButtonLabel, rightButtonLabel }) => {
    return (
        <div className='frame'>
            <div className='image' style={{backgroundColor}}>
                <div className='title'>{title}</div>
                <div className='subtitle'>{subtitle}</div>
                <div className='description'>{des}</div>
                <div className='expiration'>{exp}</div>
            </div>
            <div className='terms-container'>
                <div className='terms'>{tc.split("\\n").map(line => (<p>{line}</p>))}</div>
            </div>
            <div className='buttons'>
                <Button label={leftButtonLabel} primary={true} size={'large'} />
                <Button label={rightButtonLabel} primary={false} size={'large'} />
            </div>
        </div>
    );
};

CouponFrame.propTypes = {
    backgroundColor: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    des: PropTypes.string,
    exp: PropTypes.string,
    tc: PropTypes.string,
    leftButtonLabel: PropTypes.string,
    rightButtonLabel: PropTypes.string,
};

CouponFrame.defaultProps = {
    backgroundColor: null,
    title: 'title',
    subtitle: 'subtitle',
    des: 'description',
    exp: 'expiration',
    tc: 'terms and conditions',
    leftButtonLabel: 'Ver Detalles',
    rightButtonLabel: 'Aplicar Cupón'
};
