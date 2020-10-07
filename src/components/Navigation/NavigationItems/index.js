import React from 'react';
import NavigationItem from './NavigationItem'
import styles from './NavigationItems.module.css'

const navigationItems = () => (
    <div className={styles.NavigationItems}>
      <NavigationItem uri="/about">Sobre nós</NavigationItem>
      <NavigationItem uri="/donate">Seja um doador</NavigationItem>
    </div>
  );

export default navigationItems;