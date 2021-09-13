import * as React from "react";
import data from './data/data.json';
import axios from 'axios';
import NavBar from './components/NavBar.js'
import DataContentA from "./components/DataContentA.js"
import DataContentB from "./components/DataContentB.js"
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      item_spot: [],
      item_future: []
  
    }
  }

  async componentDidMount(){
    this.timerID = setInterval(
      () => this.updateData(),
      5000
    )   

    // fetch('https://ftx.com/api/markets', { 
    //   method: 'GET',
    //   headers: {
    //     'Accept': '*',
    //     'Access-Control-Allow-Origin': 'https://ftx.com/api/markets'
    //   }
    //  })
    //   .then(res => res.json())
    //   .then( 
    //     (result) => {
    //       result.result.map( each => {
    //         this.setState(items: each)
    //         console.log('fetching result')
    //         console.log(each)  
    //       }       
    //       )
    //     })
    //   .catch(error => {
    //     this.setState({error: this.state.error})
    //   })
    }

    updateData() {
      this.setState({
        item_spot: data.result.filter((item) => {
          return (
            (item.type == 'future' && (item.underlying == 'BTC' || item.underlying == 'ETH')
            ))
        }).map(
          ({ name, bid, ask, price, underlying, volumeUsd24h }) => (
            { name, bid, ask, price, underlying, volumeUsd24h })
        )
        ,
        item_future: data.result.filter((item) => {
          return (
            (item.type == 'future' && (item.underlying == 'BTC' || item.underlying == 'ETH')
          ))
        }).map(
          ({ name, bid, ask, price, underlying, volumeUsd24h }) => (
            { name, bid, ask, price, underlying, volumeUsd24h })
        )
      })
    }
 
  render() {
    // //fetch error handling
    // const { error, isLoaded, item } = this.state
    // if (error) {
    //   return <div>Error: {error.message}</div>
    // } else if (!isLoaded) {
    //   return <div>Loading...</div>
    // } else {
    //   return (
    //     <div>
    //       Contents
    //     </div>
    //   )
    // }
    
    return (
      <div className="App">

        <Router>
          <NavBar />
          <div>
            <Switch>
              <Route path="/DataContentA" component={DataContentA}>
                <DataContentA data={this.state.item_spot}/>
              </Route>
              <Route path="/DataContentB" component={DataContentB}>
                <DataContentB data={this.state.item_future}/>
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    )//end of return
  }//end of render  
}//end of class APP

export default App;
