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

  const createAlignmentNames = (alignments) => {
    let alignmentArray = [];
    for (let i = 0; i < alignments.length; i++) {
      alignmentArray.push(alignments[i].name);
    };
    return alignmentArray.map(align => <option key={align} onClick={setSelectedAlighment(align)}>{align}</option>)
  };

  return (
    <>
      <div class="dropdown">
      <button class="dropbtn">Alignment</button>
        <div class="dropdown-content">

            {createAlignmentNames(alignment)}
          {console.log(selectedAlignment)}
      </div>
</div>
    </>
  )
};

export default ChooseAlignment;