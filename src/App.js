import React, { Component } from 'react';
import './App.css';
import Home from './Home'
import Show from './Show'
import Form from './Form'
import Landing from './Landing'
import Issues from './Issues'
import { Route, Switch, Link} from 'react-router-dom'
import Navbar from './Navbar';

import Abortion from './Issue/Abortion'
import Immigration from './Issue/Immigration';
import CriminalJustice from './Issue/CriminalJustice';
import MinimumWage from './Issue/MinimumWage';
import GunControl from './Issue/GunControl';
import Military from './Issue/Military';

const candidates = [
  {
    "name": "Tulsi Gabbard",
    "state": "Hawaii",
    "image": "http://honolulumagazine-images.dashdigital.com/2019%20Web%20Stories/02-February/Tulsi_Gabbard%2C_official_portrait%2C_113th_Congress.jpg",
    "website": "https://www.tulsi2020.com/",
    "stillRunning": true,
    "currentTitle": "Representative",
    "description": "Gabbard currently serves as a US Representative for Hawaii's 2nd congressional district. She previously served as a Major in the Hawaii Army National Guard. Her platform focuses on foreign policy, healthcare, wealth inequality, and campaign finance reform.",
    "issues": {
      "abortion": "For",
      "immigration": "Undecided",
      "criminalJustice": "Against",
      "minimumWage": "For",
      "gunControl": "For",
      "military": "Against"
    },
    "socialMedia": {
      "twitter": "https://twitter.com/TulsiGabbard?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
      "facebook": "https://www.facebook.com/TulsiGabbard/",
      "youtube": "https://youtu.be/c0pCTjRIIhk"
    }
  },
  {
    "name": "Kirsten Gillibrand",
    "state": "New York",
    "image": "https://www.gillibrand.senate.gov/imo/media/image/Gillibrand_Kirsten-041019-RLH-025a.jpg",
    "website": "https://kirstengillibrand.com/",
    "stillRunning": false,
    "currentTitle": "Senator",
    "description": "Gillibrand currently serves as a U.S. Senator from New York. She previously served as a Congresswoman representing New York's 20th congressional district from 2007-2009. Her platform focused on paid family leave, fighting sexual misconduct, publicly funded elections, and Medicare for all. Gillibrand dropped out of the primary on August 28th, 2019.",
    "issues": {
      "abortion": "For",
      "immigration": "For",
      "criminalJustice": "Against",
      "minimumWage": "For",
      "gunControl": "Other",
      "military": "Against"
    },
    "socialMedia": {
      "twitter": "https://twitter.com/SenGillibrand?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
      "facebook": "https://www.facebook.com/KirstenGillibrand/",
      "youtube": "https://youtu.be/ACuUSppHc4M"
    }
  },
  {
    "name": "Kamala Harris",
    "state": "California",
    "image": "https://cdn.civil.services/us-senate/headshots/1024x1024/kamala-harris.jpg",
    "website": "https://kamalaharris.org/",
    "stillRunning": true,
    "currentTitle": "Senator",
    "description": "Harris currently serves as a U.S. Senator from California. She previously served as the Attorney General of California from 2011 to 2017. Her platform focuses on a middle class tax cut, reducing cash bail, election security, and Medicare for all.",
    "issues": {
      "abortion": "For",
      "immigration": "For",
      "criminalJustice": "Against",
      "minimumWage": "For",
      "gunControl": "For",
      "military": "Against"
    },
    "socialMedia": {
      "twitter": "https://twitter.com/KamalaHarris?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
      "facebook": "https://www.facebook.com/KamalaHarris/",
      "youtube": "https://www.youtube.com/watch?v=Ls7OSwHMoBc"
    }
  },
  {
    "name": "Amy Klobuchar",
    "state": "Minnesota",
    "image": "https://www.colorado.edu/cwa/sites/default/files/styles/medium/public/people/klobuchar_headshot_square.png?itok=JWpAoL9e",
    "website": "https://amyklobuchar.com/",
    "stillRunning": true,
    "currentTitle": "Senator",
    "description": "Klobuchar currently serves as a U.S. Senator from Minnesota. She previously worked as a corporate lawyer. Her platform focuses on universal broadband, free trade, healthcare, and regulating technology.",
    "issues": {
      "abortion": "Other",
      "immigration": "Undecided",
      "criminalJustice": "Against",
      "minimumWage": "For",
      "gunControl": "For",
      "military": "For"
    },
    "socialMedia": {
      "twitter": "https://twitter.com/amyklobuchar?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
      "facebook": "https://www.facebook.com/amyklobuchar/",
      "youtube": "https://www.youtube.com/watch?v=mim0b_bbEtE"
    }
  },
  {
    "name": "Elizabeth Warren",
    "state": "Massachusetts",
    "image": "https://tribwpmt.files.wordpress.com/2016/08/s014342268-3001-e1470344148473.jpg?quality=85&strip=all&w=1067",
    "website": "https://elizabethwarren.com/",
    "stillRunning": true,
    "currentTitle": "Senator",
    "description": "Warren currently serves as a U.S. Senator from Massachusetts. She previously served as Chair of the congressional oversight panel of the Troubled Asset Relief Program. Her platform focuses on worker control of corporations, Opioid epidemic, afforable housing, Medicare for all.",
    "issues": {
      "abortion": "For",
      "immigration": "For",
      "criminalJustice": "Against",
      "minimumWage": "For",
      "gunControl": "For",
      "military": "Against"
    },
    "socialMedia": {
      "twitter": "https://twitter.com/ewarren?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
      "facebook": "https://www.facebook.com/ElizabethWarren/",
      "youtube": "https://youtu.be/rbH0RU4GcVo"
    }
  },
  {
    "name": "Marianne Williamson",
    "state": "California",
    "image": "https://pbs.twimg.com/profile_images/859507720814305281/nTvKAGL6_400x400.jpg",
    "website": "https://www.marianne2020.com/",
    "stillRunning": true,
    "currentTitle": "New Age Author",
    "description": "Williamson currently works as a Bestselling, New Age book author. She previously worked as a spiritual lecturer and AIDS awareness activist. Her platform focuses on reproductive rights, wellness, immigration, and education.",
    "issues": {
      "abortion": "For",
      "immigration": "For",
      "criminalJustice": "Against",
      "minimumWage": "For",
      "gunControl": "For",
      "military": "Against"
    },
    "socialMedia": {
      "twitter": "https://twitter.com/marwilliamson?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
      "facebook": "https://www.facebook.com/williamsonmarianne/",
      "youtube": "https://youtu.be/9nqQZGbA_jQ"
    }
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
            <Route exact path='/' component = {Landing}/>
            <Route exact path="/candidates" render={() => {return <Home {...this.state}/>}} />
            <Route exact path="/candidates/:candidate" render={(routerProps) => {return <Show {...routerProps} {...this.state} />}} />
            <Route exact path="/issues" component = {Issues}/>
            <Route exact path="/issues/abortion" render={() => {return <Abortion {...this.state}/>}} />
            <Route exact path="/issues/immigration" render={() => {return <Immigration {...this.state}/>}} />
            <Route exact path="/issues/criminaljustice" render={() => {return <CriminalJustice {...this.state}/>}} />
            <Route exact path="/issues/minimumwage" render={() => {return <MinimumWage {...this.state}/>}} />
            <Route exact path="/issues/guncontrol" render={() => {return <GunControl {...this.state}/>}} />
            <Route exact path="/issues/military" render={() => {return <Military {...this.state}/>}} />
            <Route exact path="/form" render={(routerProps) => {return <Form {...routerProps} {...this.state}/>}} />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App;