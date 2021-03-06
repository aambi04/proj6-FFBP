import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Body from '../Body/Body'
import SideBar from '../SideBar/SideBar';
import ReturnPage from '../ReturnPage/ReturnPage';
import Footer from '../Footer/Footer';
import UrlParams from '../UrlParams/UrlParams';
class App extends Component {
  render() {
      const {returnpage} = this.props;
    return (
        <div className="App">
            <Header />
            <SideBar />
            {returnpage ? <ReturnPage/> : <Body />}
            <UrlParams />
            <Footer/>
        </div>
    );
  }
}

export default App;
