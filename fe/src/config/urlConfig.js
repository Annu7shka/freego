let env = 'dev';

if (window.location.host === 'freego-events.herokuapp.com') {
  env = 'prod';
}

const urlConfig = {
  dev: {
    events: 'http://localhost:3001/events/index.json',
    slides: 'http://localhost:3001/slides/index.json'
  },
  prod: {
    events: 'https://freego-events.herokuapp.com/events/index.json',
    slides: 'https://freego-events.herokuapp.com/slides/index.json'
  }
}[env];


export default urlConfig;