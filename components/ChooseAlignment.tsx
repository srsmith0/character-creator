import * as React from 'react';
import axios from '../node_modules/axios/index';

const ChooseAlignment = ({ alignment, setAlignment }) => {
  const [alignments, setAlignments] = React.useState([]);

  React.useEffect(() => {
    axios.get("https://www.dnd5eapi.co/api/alignments/")
      .then(res => {
        let alignmentsData = res.data.results;
        setAlignments(alignmentsData);
      });
  }, []);

  const createAlignmentNames = () => {
    let alignmentArray = [];
    for (let i = 0; i < alignments.length; i++) {
      alignmentArray.push(alignments[i].name);
    };
    return (
      <select value={alignment} onChange={handleChange}>
        {alignmentArray.map(align => <option id={align} key={align} value={align}>{align}</option>)}
       </select>
       ) 
  };
        
  const handleChange = (e) => {
    setAlignment(e.target.value);
  };

  return (
    <>
    <div>Choose Alignment:</div>
    {createAlignmentNames()}
    </>
  )
};

export default ChooseAlignment;