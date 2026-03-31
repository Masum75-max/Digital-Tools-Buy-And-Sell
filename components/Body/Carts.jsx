import React from 'react';
import SelectedIndividual from './SelectedIndividual';

const Carts = ({ selected ,deleteWork,setProceed}) => {

    let total=0;

    for( const card of selected){
        total+= card.price;
    }
  return (
       <div className='w-3/4 mx-auto shadow-2xl px-2 py-2 rounded-md'>
    <p className='font-bold text-2xl mb-2'>Your Cart</p>
      {selected.length === 0 ? (
        <p className='text-center my-3'>Not selected yet</p>
      ) : (
        <div className='flex flex-col gap-5  px-4 py-2'>
          {selected.map((individual, index) => 
            <SelectedIndividual
              key={index}
              SelectedIndividual={individual}
              deleteWork={deleteWork}
            />
          )}

          <div className='flex justify-between px-3 py-2 bg-fuchsia-900 text-2xl font-bold text-white rounded-md w-11/12 mx-auto my-2'>
         <p>Total :</p>
         <p>{total}</p>
      </div>

          <button className='text-center bg-blue-600 text-2xl font-bold text-white rounded-md w-11/12 mx-auto my-2 py-2' onClick={()=>setProceed()}>
          Click to Proceed
        </button>
        </div>
      )}

      
      

    </div>
  );
};

export default Carts;