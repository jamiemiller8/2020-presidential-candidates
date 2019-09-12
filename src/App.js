import React, { Component } from 'react';
import './App.css';
import Home from './Home'
import Show from './Show'
import Form from './Form'
import Landing from './Landing'
import Issues from './Issues'
import Abortion from './Issue/Abortion'
import { Route, Switch, Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';

const candidates = [
  {
    "name": "Tulsi Gabbard",
    "state": "Hawaii",
    "image": "http://honolulumagazine-images.dashdigital.com/2019%20Web%20Stories/02-February/Tulsi_Gabbard%2C_official_portrait%2C_113th_Congress.jpg",
    "website": "https://www.tulsi2020.com/",
    "stillRunning": true,
    "currentTitle": "Representative",
    "abortion": "For",
    "immigration": "Undecided",
    "criminalJustice": "Against",
    "minimumWage": "For",
    "gunControl": "For",
    "military": "Against"
  },
  {
    "name": "Kirsten Gillibrand",
    "state": "New York",
    "image": "https://www.gillibrand.senate.gov/imo/media/image/Gillibrand_Kirsten-041019-RLH-025a.jpg",
    "website": "https://kirstengillibrand.com/",
    "stillRunning": false,
    "currentTitle": "Senator",
    "abortion": "For",
    "immigration": "For",
    "criminalJustice": "Against",
    "minimumWage": "For",
    "gunControl": "Other",
    "military": "Against"
  },
  {
    "name": "Kamala Harris",
    "state": "California",
    "image": "https://cdn.civil.services/us-senate/headshots/1024x1024/kamala-harris.jpg",
    "website": "https://kamalaharris.org/",
    "stillRunning": true,
    "currentTitle": "Senator",
    "abortion": "For",
    "immigration": "For",
    "criminalJustice": "Against",
    "minimumWage": "For",
    "gunControl": "For",
    "military": "Against"
  },
  {
    "name": "Amy Klobuchar",
    "state": "Minnesota",
    "image": "https://www.colorado.edu/cwa/sites/default/files/styles/medium/public/people/klobuchar_headshot_square.png?itok=JWpAoL9e",
    "website": "https://amyklobuchar.com/",
    "stillRunning": true,
    "currentTitle": "Senator",
    "abortion": "Other",
    "immigration": "Undecided",
    "criminalJustice": "Against",
    "minimumWage": "For",
    "gunControl": "For",
    "military": "For"
  },
  {
    "name": "Elizabeth Warren",
    "state": "Massachusetts",
    "image": "https://ourfinancialsecurity.org/wp-content/uploads/2015/04/Warren-headshot.jpg",
    "website": "https://elizabethwarren.com/",
    "stillRunning": true,
    "currentTitle": "Senator",
    "abortion": "For",
    "immigration": "For",
    "criminalJustice": "Against",
    "minimumWage": "For",
    "gunControl": "For",
    "military": "Against"
  },
  {
    "name": "Marianne Williamson",
    "state": "California",
    "image": "https://pbs.twimg.com/profile_images/859507720814305281/nTvKAGL6_400x400.jpg",
    "website": "https://www.marianne2020.com/",
    "stillRunning": true,
    "currentTitle": "New Age Author",
    "abortion": "For",
    "immigration": "For",
    "criminalJustice": "Against",
    "minimumWage": "For",
    "gunControl": "For",
    "military": "Against"
  }
];

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      candidates: candidates
    }
  }
  render() {
    return (
      <div className="App">
        <div className="nav-head">
          <Navbar />
        </div>
        <main>
          <Switch>
            <Route exact path='/landing/' component = {Landing}/>
            <Route exact path="/candidates/" render={() => {return <Home {...this.state}/>}} />
            <Route exact path="/candidates/:candidate" render={(routerProps) => {return <Show {...routerProps} {...this.state} />}} />
            <Route exact path="/issues/" component = {Issues}/>
            <Route exact path="/issues/abortion/" component= {Abortion}/>
            <Route exact path="/form" render={(routerProps) => {return <Form {...routerProps} {...this.state}/>}} />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App;