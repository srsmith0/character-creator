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