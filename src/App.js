import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";
import "./Footer.css";
import "./Arrow.css";

function App() {
  return (
    <div className="app">
      <Nav id="Top" />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
        id="arrow"
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      {/*<Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />*/}


      <footer class="footer-distributed">

        <div class="footer-right">

          <a href="https://www.instagram.com/shadman_akhan/" target="_blank" rel="noopener noreferrer"><i class="fa fa-instagram"></i></a>
          <a href="https://twitter.com/ShadmanAKhan" target="_blank" rel="noopener noreferrer"><i class="fa fa-twitter"></i></a>
          <a href="https://www.linkedin.com/in/shadmanakhan/" target="_blank" rel="noopener noreferrer"><i class="fa fa-linkedin"></i></a>
          <a href="https://github.com/shadmankhan" target="_blank" rel="noopener noreferrer"><i class="fa fa-github"></i></a>

        </div>



        <div class="footer-left">
          <img class="footer-center" src="https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico" alt="Netflix" />
          <p class="footer-links">
            <a class="link-1" href="#Top">Netflix Clone Website</a>
          </p>

          <p>Shadman Khan &copy; 2020</p>
          <a href="#top">
            <div class="arrow">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </a>
        </div>

      </footer>


    </div >
  );
}

export default App;
