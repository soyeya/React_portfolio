import React from 'react';
import youth01 from '../assets/img/youth01.png';
import youth02 from '../assets/img/youth02.png';
import youth03 from '../assets/img/youth03.png';
import youth04 from '../assets/img/youth04.png';
import youth05 from '../assets/img/youth05.png';
import bana01 from '../assets/img/banapresso01.png';
import bana02 from '../assets/img/banapresso02.png';
import bana03 from '../assets/img/banapresso03.png';
import bana04 from '../assets/img/banapresso04.png';
import bana05 from '../assets/img/banapresso05.png';
import ezpz01 from '../assets/img/ezpz01.png';
import ezpz02 from '../assets/img/ezpz02.png';
import ezpz03 from '../assets/img/ezpz03.png';
import ezpz04 from '../assets/img/ezpz04.png';
import ezpz05 from '../assets/img/ezpz05.png';
import ezpz06 from '../assets/img/ezpz06.png';

const Myproject = ( { open , active , prj01, prj02, prj03, id}) => {

     return(

        <div className={open ? "myProject active" : "myProject"} id={id}>
          <div className="prjWrap boxPadding">
                <div className="prjBox textBox">
                    <ul className={active ? "title active" : "title"}>
                        <p>My Project</p>
                    </ul>
                </div>
            <div className={prj01 ? "prjInfo prj01 active" : "prjInfo prj01"}>
             <div className='subTitle'>
               <a href="https://soyeya.github.io/youth_react/" target="_blank" rel="noreferrer noopener"><strong>React</strong>Youth(유스에게)</a>
               <p><strong>Info_</strong>정부의 청년정책 및 다양한 금융정보를 모아놓은 청년층을 위한 앱</p>
               <p><strong>Skill_</strong>React, Webpack, Babel, Node.js, Mysql</p>
             </div>
            <div className="imgBox">
                <ul>
                    <img src={youth01} alt="youthImg01" />
                    <img src={youth02} alt="youthImg02" />
                    <img src={youth03} alt="youthImg03" />
                    <img src={youth04} alt="youthImg04" />
                    <img src={youth05} alt="youthImg05" />
                </ul>
            </div>
            </div>
            <div className={prj02 ? "prjInfo prj02 active" : "prjInfo prj02"}>
             <div className='subTitle'>
               <a href="https://soyeya.github.io/banapresso/" className='prjName02' target="_blank" rel="noreferrer noopener"><strong>React</strong>BANAPRESSO (바나프레소)</a>
               <p><strong>Info_</strong>인기있는 저렴한 커피브랜드의 서비스 구현</p>
               <p><strong>Skill_</strong>React, Webpack, Babel, Node.js</p>
             </div>
            <div className="imgBox">
                <ul>
                    <img src={bana01} alt="banapressoImg01" />
                    <img src={bana02} alt="banapressoImg02" />
                    <img src={bana03} alt="banapressoImg03" />
                    <img src={bana04} alt="banapressoImg04" />
                    <img src={bana05} alt="banapressoImg05" />
                </ul>
            </div>
            </div>
            <div className={prj03 ? "prjInfo prj03 active" : "prjInfo prj03"}>
             <div className='subTitle'>
               <a href="https://soyeya.github.io/ezpz_app/" className='prjName03' target="_blank" rel="noreferrer noopener"><strong>React</strong>EZPZ (이모저모)</a>
               <p><strong>Info_</strong>날씨, 지하철, 식당정보 등 실생활에 유용한 서울앱</p>
               <p><strong>Skill_</strong>React, Webpack, Babel, Node.js</p>
             </div>
            <div className="imgBox">
                <ul>
                    <img src={ezpz01} alt="ezpzImg01" />
                    <img src={ezpz02} alt="ezpzImg02" />
                    <img src={ezpz03} alt="ezpzImg03" />
                    <img src={ezpz04} alt="ezpzImg04" />
                    <img src={ezpz05} alt="ezpzImg05" />
                    <img src={ezpz06} alt="ezpzImg06" />
                </ul>
            </div>
            </div>
           </div>
        </div>
     )
}

export default Myproject;