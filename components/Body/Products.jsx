import React from 'react';
import {use} from 'react'
import Work from './Work'

const Products = ({allWorksPromise,selectedSetter}) => {
const allWorksData= use(allWorksPromise)



    return (
        <div className='grid grid-cols-3  gap-6 w-11/12 mx-auto'>
        {
        allWorksData.map(work=><Work work={work} selectedSetter={selectedSetter}></Work>)
        }
        </div>
    );
};

export default Products;