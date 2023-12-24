import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import together1 from './together1.jpg'
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion'


function App() {
  return (
    <div className="App">        
    <NavBarContent />
      <header className="App-header"> 
        
        
      </header>
      <div className='body'>
        <div className='bodyContent'>
          <div className='ListGroupContents'>
            <p id='demo'>Special dates :3</p>
            <ListGroup className='ListGroup' data-bs-theme='light'>
              <ListGroup.Item>𝟸𝟽/𝟷𝟷/𝟶𝟽 - 𝚓𝚊𝚜𝚢 𝚋𝚒𝚛𝚝𝚑𝚍𝚊𝚢</ListGroup.Item>
              <ListGroup.Item>𝟶𝟷/𝟶𝟿/𝟶𝟼 - 𝚌𝚛𝚒𝚜 𝚋𝚒𝚛𝚝𝚑𝚍𝚊𝚢</ListGroup.Item>
              <ListGroup.Item>𝟸𝟺/𝟷𝟸/𝟸𝟸 - 𝚊𝚗𝚗𝚒𝚟𝚎𝚛𝚜𝚊𝚛𝚢</ListGroup.Item>
              <ListGroup.Item>𝟸𝟽/𝟷𝟷/𝟶𝟽 - 𝚏𝚒𝚛𝚜𝚝 𝚔𝚒𝚜𝚜</ListGroup.Item>
              <ListGroup.Item>𝟷𝟷/𝟷𝟷/𝟸𝟸 - 𝚏𝚒𝚛𝚜𝚝 𝚖𝚎𝚝 </ListGroup.Item>
            </ListGroup>
          </div>

          <div className='timerPicture'>
            <p id='demo'>Our time together:</p>
            <ElapsedTimeCounter />
            <img className='picture' alt='US!!' src={together1} />
          </div>

          <div className='AccordionContents'>
            <p id='demo'>Fun facts!!</p>
            <Accordion defaultActiveKey='0' className='accordion'> 
              <Accordion.Item eventKey='0'>
                I love you ˚ʚ♡ɞ˚
              </Accordion.Item>
              <Accordion.Item eventKey='1'>  
              In history, the year 405 AD is known for events such as the death of St. Jerome, a Latin priest, confessor, and theologian. 
               </Accordion.Item>
              <Accordion.Item eventKey='2'>   
              The fluttery feeling in your stomach when you're in love is caused by adrenaline. It's the same chemical that your body produces when you face danger, which is why it's often referred to as "butterflies."              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        
        <div className='footer'>
          <div className='hrDiv'>
            <hr className="hr-text" data-content="˚ʚ♡ɞ˚" />
          </div>
          <p>I love you the most!!!!</p>
        </div>
      </div>


    </div>
  );
}

function NavBarContent() {
  return (
<Navbar variant='white' className="bg-body-tertiary">
  <Container>
    <Navbar.Brand>Jasmin's and Cris's Website!</Navbar.Brand>
    <p id="quote">Being with you is my favorite feeling :)</p>
    <CountdownTimer className="CountdownTimer" />
  </Container>
</Navbar>


  );
}

const CountdownTimer = () => {
  const endDate = new Date('December 23, 2023 23:59:59').getTime(); // Replace with your end date
  const [time, setTime] = useState(calculateTimeRemaining());

  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const distance = endDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's';
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(calculateTimeRemaining());
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <p id='demo'>{time}</p>;
};

const ElapsedTimeCounter = () => {
  const startDate = new Date('November 11, 2022 2:30:59').getTime(); 
  const [timeElapsed, setTimeElapsed] = useState(calculateTimeElapsed());

  function calculateTimeElapsed() {
    const now = new Date().getTime();
    const elapsedMilliseconds = now - startDate ;

    const days = Math.floor(elapsedMilliseconds / (1000 * 60 * 60 * 24));
    const hours = Math.floor((elapsedMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsedMilliseconds % (1000 * 60)) / 1000);

    return days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's';
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeElapsed(calculateTimeElapsed());
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <p id='demo'>{timeElapsed}</p>;
};

export default App;





