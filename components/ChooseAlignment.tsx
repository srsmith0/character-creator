import * as React from 'react';
import axios from '../node_modules/axios/index';

const ChooseAlignment = ({ alignment, setAlignment, selectedAlignment, setSelectedAlighment }) => {

  React.useEffect(() => {
    axios.get("https://www.dnd5eapi.co/api/alignments/")
      .then(res => {
        let alignmentsData = res.data.results;
        setAlignment(alignmentsData);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  }
  // var FruitSelector = React.createClass({
  //   getInitialState:function(){
  //     return {selectValue:'Radish'};
  // },
  //   handleChange:function(e){
  //   this.setState({selectValue:e.target.value});
  // },
  // render: function() {
  //   var message='You selected '+this.state.selectValue;
  //   return (
  //     <div>
  //     <select 
  //       value={this.state.selectValue} 
  //       onChange={this.handleChange} 
  //     >
  //      <option value="Orange">Orange</option>
  //       <option value="Radish">Radish</option>
  //       <option value="Cherry">Cherry</option>
  //     </select>

  const createAlignmentNames = (alignments) => {
    let alignmentArray = [];
    for (let i = 0; i < alignments.length; i++) {
      alignmentArray.push(alignments[i].name);
    };
    return (
      <select value={selectedAlignment} onChange={handleChange}>
        {alignmentArray.map(align => <option id={align} key={align} value={align}>{align}</option>)}
       </select>
       ) 
  };
        
  const handleChange = (e) => {
    setSelectedAlighment(e.target.value);
  };

  return (
    <>
    {createAlignmentNames(alignment)}
    </>
  )
};

export default ChooseAlignment;