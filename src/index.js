import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';


class WhoAmI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      years:45
    }
    }

    nextYear = ()=>{
      this.setState(state => ({
            years: ++state.years
          }))
    // this.nextYear = this.nextYear.bind(this);
  }

  // nextYear(){
  //   console.log(1);
  //   this.setState(state => ({
  //     years: ++state.years
  //   }))
  // }

  render() {
    const {name, surname, link} = this.props;
    const {years} = this.state;
    return (      
      <>
      <button onClick={this.nextYear}>+++</button>
        <h1>my name is {name}, surname - {surname}, my age is {years}</h1>
        <a href={link} target='blank'>My profile</a>
      </>
    )
  }
}


const All = () => {
  return (
    
    <>
    <WhoAmI name='john' surname='lennon' link='http://ya.ru'/>
    </>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


