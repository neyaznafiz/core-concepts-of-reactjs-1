import logo from './logo.svg';
import './App.css';

const name = 'Alex'
const singer = { name: 'Dr. Mahfuz', job: 'Singer' }
const singer2 = { name: 'Eva Rahman', job: 'Fimale Singer' }

const singerStyle = {
  color: 'yellow',
  backgroundColor:'gray',
  padding: '10px',
  borderRadius: '10px'
}

function App() {
  return (
    <div className="App">

        <div style={{border:'2px solid black', marginBottom:'20px', padding:'20px'}}>
        <h1>JSX</h1>
        <p>- javaScript XML.</p>
        <p>- Allow us to write HTML in react.</p>
        <p>- Writing and adding HTML in React is easier.</p>
        </div>
        

        <div className="container">
          <h3>Hello Dude! React. How are you</h3>
        </div>

        <div className="music">

          <p> Name: {name + ' ' + 'Costa'} </p>

          <p style={singerStyle}> Name: {singer.name}. Job: {singer.job} </p>

          <p style={{backgroundColor:'gray', padding: '10px',  borderRadius: '10px'}}> Name: {singer2.name}. Job: {singer2.job} </p>

        </div>

       
      
    </div>
  );
}

export default App;
