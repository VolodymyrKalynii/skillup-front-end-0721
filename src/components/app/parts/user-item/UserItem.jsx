import React from 'react';

import styles from './styles.scss';

export const UserItem = ({userName}) => (
    <div className={styles.userInfoWrap}>
        <p>name: {userName}</p>
    </div>
);
