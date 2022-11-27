import React,{FC} from 'react';
import Top from './top/top';
import Bottom from './bottom/bottom';
import Middle from './middle/middle';
const Views:FC = ()=> {
  return (
    <div className="views">
      <Top/>
      <Middle/>
      <Bottom/>
    </div>
  );
}

export default Views;
