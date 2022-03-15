import logo from './logo.svg';
import './App.css';

//  fro 1
// const name = 'Alex'
// const singer = { name: 'Dr. Mahfuz', job: 'Singer' }
// const singer2 = { name: 'Eva Rahman', job: 'Fimale Singer' }

const singerStyle = {
  color: 'yellow',
  backgroundColor: 'gray',
  padding: '10px',
  borderRadius: '10px'
}

// 1. html css code add concept
/* function App() {
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
} */


// 2. Create Component, return HTML from a component.
/* function App() {
  return (
    <div className="App">
      <Person></Person>
      <h5>New Component</h5>
      <Friend></Friend>
    </div>
  )
}

function Person(props) {
  console.log(props)
  return (
    <div className='person'>
      <h1>Hello bro</h1>
      <p>Profession: Cricketer</p>
    </div>
  )
}

function Friend(){
  return (
    <div className='container'>
      <h1>Name: Ajay Devgun</h1>
      <p>Job: Fight</p>
    </div>
  )
} */



// 3. Pass dynamic data to components, props in react
/* function App() {
  return (
    <div className="App">
      <Person name='Rubel' naika='katrina'></Person>
      <Person name='Bapparaz' naika='alia bhat'></Person>
      <Person name='Kuber' naika='kopila'></Person>
      <h5>New Component</h5>
      <Friend movie='Singham' phone='031569852'></Friend>
      <Friend phone='019855558'></Friend>
      <Friend></Friend>
    </div>
  )
}

function Person(props) {
  // console.log(props)
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      <p>Naika: {props.naika}</p>
    </div>
  )
}

function Friend(props){
  console.log(props)
  return (
    <div className='container'>
      <h1>Name: Ajay Devgun</h1>
      <p>Phone: {props.phone}</p>
      <p>Movie: {props.movie}</p>
    </div>
  )
} */



// 3. Create multiple components from an array of objects
const singers = [
  { name: 'Dr. Mahfuz', job: 'Singer' },
  { name: 'Eva Rahman', job: 'Fimale Singer' },
  { name: 'Agun', job: 'Shopno' },
  { name: 'Shuvro', job: 'Pathor' }
]

function App() {
  const nayoks = ['Rubel', 'Bapparaj', 'Kuber', 'Jashim', 'Salman Shah', 'Riyaz', 'Razzak', 'Anwar']
  return (
    <div className="App">
      {
        nayoks.map(nayok => <div className='container'> <li>{nayok}</li> </div>)
      }

      {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      }

      {
        singers.map(singer => <Person name={singer.name}></Person>)
      }

      {/* <Person name={nayoks[0]} naika='katrina'></Person>
      <Person name={nayoks[1]} naika='alia bhat'></Person>
      <Person name={nayoks[2]} naika='kopila'></Person> */}
      <h5>New Component</h5>
      <Friend movie='Singham' phone='031569852'></Friend>
      <Friend phone='019855558'></Friend>
      <Friend></Friend>
    </div>
  )
}

function Person(props) {
  // console.log(props)
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      <p> {props.naika}</p>
    </div>
  )
}

function Friend(props) {
  // console.log(props)
  return (
    <div className='container'>
      <h1>Name: Ajay Devgun</h1>
      <p>Phone: {props.phone}</p>
      <p>Movie: {props.movie}</p>
    </div>
  )
}

export default App;

