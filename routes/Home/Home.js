import React, { Component, PropTypes } from 'react';
import Layout from '../../components/Layout';
import Link from '../../components/Link';
import s from './Home.css';

const title = 'React App Starter Kit';

class HomePage extends Component {
  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <div className={`${s.bg}`}>
        <div className={`${s.wrapper}`}>
          <button>Juntar-se</button>
          <a href="lories/3">ir para o site</a>
        </div>    
      </div>
    );
  }

}

export default HomePage;
