import React from 'react';
import { Collections } from './Collections';
import { FeatureImage } from './FeatureImage';

export const HomePage:React.FC<{}>=()=>{
    return(
        <React.Fragment>
            <FeatureImage/>
            <Collections/>
        </React.Fragment>
    )
}