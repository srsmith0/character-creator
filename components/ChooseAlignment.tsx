import * as React from 'react';
import axios from '../node_modules/axios/index';

const ChooseAlignment = ({ alignment, setAlignment, selectedAlignment, setSelectedAlighment }) => {

  React.useEffect(() => {
    axios.get("https://www.dnd5eapi.co/api/alignments/")
      .then(res => {
        let alignmentsData = res.data.results;
        setAlignment(alignmentsData);
        console.log(alignment);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  }
  const createAlignmentNames = (alignments) => {
    let alignmentArray = [];
    for (let i = 0; i < alignments.length; i++) {
      alignmentArray.push(alignments[i].name);
    };
    return (
      <select>
        {alignmentArray.map(align => <option key={align} value={align}>{align}</option>)}
       </select>
       ) 
  };

  return (
    <>
    
    {createAlignmentNames(alignment)}



    </>
  )
};

export default ChooseAlignment;