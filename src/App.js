import React, {Component} from 'react';
import './App.css';
import molly from './mollysgame.jpg';
import { BrowserRouter as Router} from 'react-router-dom';
import MovieTitle from './MovieTitle';
import Gallery from './Gallery';

class App extends Component {
render() {
  
  return (
    <div className="App">


      <h1>KodFlix</h1>

      <nav>Nav bar</nav>
      <div className="container">
        <aside>Menu</aside>
        <article>Article</article>
      </div>

      <img src={molly} className="header-image" alt='molly logo' />




      {/* <div className="container">

        <MovieTitle name="Black Mirror" picture="box box1" />
        <MovieTitle name="Suits" picture="box box2" />
        <MovieTitle name="The Witcher" picture="box box3" />

      </div>

      <div className="container">

        <MovieTitle name="Bleach" picture="box box4" />
        <MovieTitle name="Lucifer" picture="box box5" />
        <MovieTitle name="Fairytail" picture="box box6" />
      </div>*/}

      <Gallery>
       
      </Gallery>

    </div>



  );

}








/*
function Details (){
  return (

<Gallery>

<a href = "http://localhost:3000/details" title="Hello, this will be the 
details page for each Movie & TV show :)"/>

/>





*/






export default App;

