import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button';

import './button.css';
import './coupon-frame.css';

/**
 * Primary UI component for user interaction
 */
export const CouponFrame = ({ primary, backgroundColor, size, label, title, subtitle, des, exp, tc, ...props }) => {
    return (
        <div className='frame'>
            <div className='image'>
                <div className='title'>{title}</div>
                <div className='subtitle'>{subtitle}</div>
                <div className='description'>{des}</div>
                <div className='expiration'>{exp}</div>
            </div>
            <div className='terms-container'>
                <div className='terms'>{tc}</div>
            </div>
            <div className='buttons'>
                <Button label={'Ver Detalles'} primary={true} size={'large'} />
                <Button label={'Aplicar cupón'} primary={false} size={'large'} />
            </div>
        </div>
    );
};

CouponFrame.propTypes = {
    /**
     * Is this the principal call to action on the page?
     */
    primary: PropTypes.bool,
    /**
     * What background color to use
     */
    backgroundColor: PropTypes.string,
    /**
     * How large should the button be?
     */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /**
     * Button contents
     */
    label: PropTypes.string.isRequired,
    /**
     * Optional click handler
     */
    onClick: PropTypes.func,
};

CouponFrame.defaultProps = {
    backgroundColor: null,
    primary: false,
    size: 'medium',
    title: 'title',
    subtitle: 'subtitle',
    des: 'description',
    exp: 'expiration',
    tc: 'terms and conditions',
    onClick: undefined,
};
