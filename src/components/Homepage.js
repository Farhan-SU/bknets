import React from 'react';
import { useState, useEffect} from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../assets/styles/layout.scss';
import axios from 'axios';

function HomePage() {


    {/* Tried to create an object and update them together
  const [rosters, setRoster] = useState({ allPlayers: null, playerStats: null });

  useEffect(() => {
    const fetchData = async () => {
      const playerRoster = await axios(
       'https://data.nba.com/data/v2015/json/mobile_teams/nba/2021/teams/nets_roster.json'
      );
      const theirStats = await axios(
        'https://data.nba.com/data/v2015/json/mobile_teams/nba/2021/teams/nets/player_averages_02.json'
      );

      setRoster({ allPlayers: playerRoster.data.t.pl, playerStats: theirStats.data.tpsts.pl });
    };
    fetchData();
  }, []);*/}

  const [rosters, setRoster] = useState([]);

  const getNetsRoster = async () => {
    const allPlayers = await axios.get("https://data.nba.com/data/v2015/json/mobile_teams/nba/2021/teams/nets/player_averages_02.json");
    setRoster(allPlayers.data.tpsts.pl);
  }

  useEffect(() =>{
     getNetsRoster();
  },[]);
  
  return (
    <>
    <div className='headerBanner'>
    <div>
    <h1>Brookyln Nets Roster</h1>
    <h2>Effort Means Everthing, We Go Hard</h2>
    </div>
    </div>
    <>
      {rosters && (
        <Accordion className='rosterWrapper' flush>
          {rosters.map((roster) => (
            <Accordion.Item eventKey={roster.pid} key={roster.pid} className='rosterCol'>
            <Accordion.Header>
                <img src="https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/200746.png" className="playPic" alt="player"/>
                <div>
                <h2>{roster.fn} {roster.ln}</h2>
                <h4>Position: <em>{roster.pos}</em></h4>
                </div>
            </Accordion.Header>
            <Accordion.Body>
            <div className='accbodyWrapper'>
            <Row className='accordBodyRow'>
              <h4>Regular Season Averages</h4>
              <Col>
              <p>GP: {roster.avg.gp}</p>
              <p>GS: {roster.avg.gs}</p>
              </Col>
              <Col>
              <p>Min: {roster.avg.min}</p>
              <p>FG %: {roster.avg.fgp}</p>
              </Col>
              <Col>
              <p>Tpp: {roster.avg.tpp}</p>
              <p>Ftp: {roster.avg.ftp}</p>
              </Col>
            </Row>
            <Row className='accordBodyRow'>
              <Col>
              <p>reb: {roster.avg.tpp}</p>
              <p>ast: {roster.avg.ftp}</p>
              </Col>
              <Col>
              <p>Oreb: {roster.avg.gp}</p>
              <p>Dreb: {roster.avg.gp}</p>
              </Col>
              <Col>
              <p>Tpp: {roster.avg.tpp}</p>
              <p>Ftp: {roster.avg.ftp}</p>
              </Col>
            </Row>
            <Row className='accordBodyRow'>
              <Col>
              <p>stl: {roster.avg.stl}</p>
              <p>blk: {roster.avg.blk}</p>
              </Col>
              <Col>
              <p>tov: {roster.avg.tov}</p>
              <p>pf: {roster.avg.pf}</p>
              </Col>
              <Col>
              <p>pts: {roster.avg.pts}</p>
              </Col>
            </Row>
            <Row className='accordBodyRow'>
              <h4>Regular Season Total</h4>
              <Col>
              <p>GP: {roster.tot.gp}</p>
              <p>GS: {roster.tot.gs}</p>
              </Col>
              <Col>
              <p>Min: {roster.tot.min}</p>
              <p>FGM: {roster.tot.fgm}</p>
              </Col>
              <Col>
              <p>fga: {roster.tot.tpp}</p>
              <p>tpm: {roster.tot.ftp}</p>
              </Col>
            </Row>
            <Row className='accordBodyRow'>
              <Col>
              <p>tpa: {roster.tot.tpa}</p>
              <p>ftm: {roster.tot.ftm}</p>
              </Col>
              <Col>
              <p>fta: {roster.tot.gp}</p>
              <p>oreb: {roster.tot.gp}</p>
              </Col>
              <Col>
              <p>dreb: {roster.tot.tpp}</p>
              <p>reb: {roster.tot.ftp}</p>
              </Col>
            </Row>
            <Row className='accordBodyRow'>
              <Col>
              <p>ast: {roster.tot.stl}</p>
              <p>stl: {roster.tot.blk}</p>
              </Col>
              <Col>
              <p>blk: {roster.tot.tov}</p>
              <p>tov: {roster.tot.pf}</p>
              </Col>
              <Col>
              <p>pf: {roster.tot.pf}</p>
              <p>pts: {roster.tot.pts}</p>
              </Col>
            </Row>
            </div>
            </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      )}
       </>
    </>
  );
}

export default HomePage;

