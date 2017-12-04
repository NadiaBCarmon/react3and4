import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  //Props 1//
  //render(){
    //return(
      //<div id="root">
      //<img src={this.props.img} alt=" "></img>    
      //<h1>{this.props.name}</h1>
      //<h2>{this.props.tagline}</h2>
  //    </div>
    //)
  //}
//}

//ReactDOM.render (
  //<App name='Foresold', 
  //tagline= 'We give you the tools to decide whether to buy, hold or sell your stock',
  //img='./stocks.jpeg'/>, document.getElementById('root'))

//export default App;
//End of Props1//

//-------------------------------------------------------------//

//Props 2//

  //var USER_DATA = {
    //name: 'Nadia Carmon',
    //img: './stocks.jpeg',
    //username: 'nadiacarmon'
  //}


  //render() {
    //return(
      //<div id="root">
      //<img src={this.props.user.img} />
      //<h1>Name: {this.props.user.name}   </h1>
      //<h3>Username: {this.props.user.username}</h3>
      //</div>
    //)
  //}
//}

//ReactDOM.render(
  //<App user={USER_DATA}/>,
  //document.getElementById('root')
 // );

//End of Props 2//

//--------------------------------------------------------------//

//End of .Map()//

 // render() {
   // return (
     // <ul>
       // {this.props.list.map(function (name) {

         // return <li>{name}</li>
          
        //})};

      //</ul>
    //)
  //}
//}

//ReactDOM.render(
  //<App list={['Tyler', 'Mikenzi', 'Ryan', 'Michael']} />,
  //document.getElementById('app')
//);


//End of .Map()//

    render() {

    return (
      <div>
        <h1>Friends</h1>
        <ul>
          {this.props.list.filter(function (user){
            return user.friend === true
          }).map(function (user) {
            return <li> (user.name) </li>
          })}
        </ul>
        
        <hr />
        
        <h1> Non Friends </h1>
        <ul>
          {this.props.list.filter(function (user){
            return user.friend !== true
          }).map(function (user) {
            return <li> (user.name) </li>
          })}
        </ul>        
      </div>
    )
  }
}

ReactDOM.render(
  <Users list={[
    { name: 'Tyler', friend: true },
    { name: 'Ryan', friend: true },
    { name: 'Michael', friend: false },
    { name: 'Mikenzi', friend: false },
    { name: 'Jessica', friend: true },
    { name: 'Dan', friend: false } ]} 
  />,
  document.getElementById('app')
);


export default App;