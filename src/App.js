import React, {useState} from 'react';

function MyName(){

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [enableFirstName, setEnableFirstName] = useState(false);

  function handleChange(event){
    setName(event.target.value);
  }

  function handleLastNameChange(event){
    setLastName(event.target.value);
  }

  function handleEnableChange(event){
    setEnableFirstName(!enableFirstName);
  }
  
  return(
    <div>
      <h1>My name is : {enableFirstName ? name : ''} {lastName}</h1>
      <input type="checkbox" value = {enableFirstName} onChange={handleEnableChange} />
      <input type="text" value = {name} onChange={handleChange} />
      <input type="text" value = {lastName} onChange={handleLastNameChange} />
    </div>
  );
}
export default MyName;

// import React from 'react';

// class MyName extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {name : ''}
//   }

//   handleChange = (event) => {
//     this.setState({name : event.target.value});
//   }

//   render() {
//     const {name} = this.state;
//     return(
//       <>
//       <h1>My name is : {name} </h1>
//       <input type="text" value = {name} onChange={this.handleChange} />
//       </>
//     );
//   }
// }

// export default MyName;