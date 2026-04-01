import React from 'react';
import {use} from 'react'
import Work from './Work'

const Products = ({allWorksPromise,selectedSetter}) => {
const allWorksData= use(allWorksPromise)



    return (
        <div className='grid grid-cols-1  gap-6 w-11/12 mx-auto md:grid-cols-2 lg:grid-cols-3'>
        {
        allWorksData.map(work=><Work work={work} selectedSetter={selectedSetter}></Work>)
        }
        </div>
    );
};

export default Products;