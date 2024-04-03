import React from 'react';
import naviDB from '../json/navi.json';

const Navi = ({ active }) => {

     return(
        <div className={active ? "navi active" : "navi"}>
            <ul>
                {naviDB.nav.map((v,i) => (
                 <li key={'nav'+i}><a href={v.href}>{v.title}</a></li>
                ))}
            </ul>
        </div>
     )
}

export default Navi;