import { useRef, forwardRef } from 'react';

import styles from './BaseButton.Module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function BaseButton({ children, disabled }) {
    const styles = ['btn'];

    if (disabled) styles.push('btn--disabled');
    console.log('styles', styles);

    return <button className={cx(styles.join(' '))}>{children}</button>;
}
