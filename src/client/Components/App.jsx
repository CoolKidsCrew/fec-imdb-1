import React, { Component } from 'react';
import PhotoList from './PhotoList.jsx';
import CastList from './CastList.jsx';
import Storyline from './Storyline.jsx';
import Details from './Details.jsx';
// import CompanyCredits from './CompanyCredits.jsx';
import BoxOffice from './BoxOffice.jsx';
import DidYouKnow from './DidYouKnow.jsx';
import FAQ from './FAQ.jsx';
import Footer from './Footer.jsx';
// import Review from './Review.jsx'; setup for later

import styles from './styles/App.css';
import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentMovie: null,
    };
  }
  componentDidMount() {
    let randFileIndex = Math.floor(Math.random() * 10000)
    let randBatchNum = Math.floor(Math.random() * 100)
    let randFileNum = Math.floor(Math.random() * 9) + 11;
    console.log(`Getting http:middle/api/movie/${randFileIndex}-${randBatchNum}-${randFileNum}`);

    const options = {
      url: `/api/movie/${randFileIndex}-${randBatchNum}-${randFileNum}`,
      method: 'get',
    };
    console.log('Getting... ', options.url);
    axios(options)
      .then((results) => {
        console.log(results.data[0]);
        let languages = [];
        languages.push(results.data[0].languages)
        results.data[0].languages = languages
        console.log(results.data[0].languages);
        this.setState({
          currentMovie: results.data[0],
        });
      })
      .catch(err => console.log('ERROR from App', err));
  }
  render() {
    if (this.state.currentMovie) {
      return (
        <div className={ styles.root }>
          <div className={ styles.container }>
            <PhotoList urls={ this.state.currentMovie.photos } />
            <CastList 
              cast={ this.state.currentMovie._cast } 
              movieId={ this.state.currentMovie.id }
            />
            <Storyline storyline={ this.state.currentMovie.storyline } plotKeyWords={ this.state.currentMovie.plotkeywords }
              taglines={ this.state.currentMovie.taglines } 
              genres={ this.state.currentMovie.genres }
              movieId={ this.state.currentMovie.id }
              />
            <Details 
              aKa={ this.state.currentMovie.aka }
              country={ this.state.currentMovie.country }
              languages={ this.state.currentMovie.languages }
              releaseDate={ this.state.currentMovie.releasedate }
              officialSites={ this.state.currentMovie.officialsites }
              filmingLocations={ this.state.currentMovie.filminglocations }
              movieId={ this.state.currentMovie.id }
            />
            <BoxOffice
              budget={ this.state.currentMovie.budget }
              openingWeekend= { this.state.currentMovie.openingweekend } 
              gross={ this.state.currentMovie.gross }
              cumulative= { this.state.currentMovie.cumulative }
              movieId={ this.state.currentMovie.id }
            />
            <DidYouKnow
              trivia={ this.state.currentMovie.trivia }
              goofs={ this.state.currentMovie.goofs }
              quotes={ this.state.currentMovie.quotes }
              crazyCredits={ this.state.currentMovie.crazycredits }
              connections={ this.state.currentMovie.connections }
              soundtracks= { this.state.currentMovie.soundtracks }
              movieId={ this.state.currentMovie.id }
            />
            <FAQ 
              questions={ this.state.currentMovie.faq } 
              movieId={ this.state.currentMovie.id }
            />
            <Footer />
          </div>
        </div> 
      );
    } else {
      return (
        <div>
          Loading...
        </div>
      );
    }
  }
}

// const App = () => {
//   return (
//     <div className={ styles.root }>
//       <div className={ styles.container }>
//         <PhotoList urls={ mockPhotoUrls } />
//         <CastList cast={ mockCast }/>
//         <Storyline storyline={ mockStoryline.storyline } plotKeyWords={ mockStoryline.plotKeyWords }
//           taglines={ mockStoryline.taglines } genres={ mockStoryline.genres }
//           />
//         <Details details={ mockDetails } />
//       </div>
//     </div> 
//   );
// }
