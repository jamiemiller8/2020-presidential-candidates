import React, { Component } from 'react';
import './App.css';
import Home from './Home'
import Show from './Show'
import Form from './Form'
import Landing from './Landing'
import { Route, Switch, Link} from 'react-router-dom'

const candidates = [
  {
    "name": "Tulsi Gabbard",
    "state": "Hawaii",
    "image": "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwiy-aSwrMfkAhXuT98KHe7HABoQjRx6BAgBEAQ&url=http%3A%2F%2Fwww.honolulumagazine.com%2FHonolulu-Magazine%2FMarch-2019%2FWho-is-Tulsi-Gabbard-Its-Complicated%2F&psig=AOvVaw1DmHqNZ9qY_mUs-q9y6wPx&ust=1568242409869405",
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
    "image": "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwiW6L7ArMfkAhXpQ98KHTYaD_MQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.gillibrand.senate.gov%2Fabout&psig=AOvVaw2yBbEe2Hkol-VFPaqSMqWS&ust=1568242444052465",
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
    "image": "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwjBzfrNrMfkAhVQn-AKHaXWB1EQjRx6BAgBEAQ&url=https%3A%2F%2Fcivil.services%2Fus-senate%2Fcalifornia%2Fsenator%2Fkamala-harris&psig=AOvVaw19h5VnsMiOHrKhhgFxsN0b&ust=1568242465424013",
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
    "image": "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwjVkpbZrMfkAhWhmOAKHTmyAUoQjRx6BAgBEAQ&url=https%3A%2F%2Fballotpedia.org%2FU.S._Senate_delegation_from_Minnesota&psig=AOvVaw22eM6r5KW15mcvd0Moqhi1&ust=1568242490377139",
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
    "image": "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwiz9J7prMfkAhUhh-AKHfPRBpAQjRx6BAgBEAQ&url=http%3A%2F%2Ftherespectabilityreport.org%2F2018%2F11%2F06%2Fwarren-wins%2F&psig=AOvVaw2mavud4sRfa5G22JvvkWvJ&ust=1568242512812937",
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
    "image": "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwiwteHzrMfkAhVqh-AKHSmvAfMQjRx6BAgBEAQ&url=https%3A%2F%2Ftalkingpointsmemo.com%2Fnews%2Fmarianne-williamson-insist-not-cult-leader-anti-vaxxer&psig=AOvVaw0k-y36jCqVQgXpj-ulbEwP&ust=1568242546653730",
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
        <main>
          <Switch>
            <Route exact path='/landing/' component = {Landing}/>
            <Route exact path="/candidates/" render={() => {return <Home {...this.state}/>}} />
            <Route exact path="/candidates/:candidate" render={(routerProps) => {return <Show {...routerProps} {...this.state} />}} />
            <Route exact path="/form" render={(routerProps) => {return <Form {...routerProps} {...this.state}/>}} />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App;