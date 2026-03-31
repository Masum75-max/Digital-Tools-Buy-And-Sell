import React from 'react';

const SelectedIndividual = ({SelectedIndividual,deleteWork}) => {
    return (
       <div className='flex justify-between bg-gray-50 rounded-md px-4 py-2' >
              <div className='flex flex-col'>
                   <h6 className='font-bold'>{SelectedIndividual.name}</h6>
                   <p className='text-gray-400'>${SelectedIndividual.price}</p>
              </div>
              <button className='text-red-500' onClick={()=>deleteWork(SelectedIndividual)}>
                x Remove
              </button>
       </div>
    );
};

export default SelectedIndividual;