import React from 'react';
import Header from '../Header'
import Home from '../Home'
import About from '../About'
import Layout from '../../hoc/Layout/Layout'
import { Route } from 'react-router-dom'
import styles from './App.module.css'

const app = () => (
  <div className={styles.App}>
    <Layout>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </Layout>
  </div>
);

export default app;