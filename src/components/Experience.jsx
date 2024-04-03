import React from 'react';
import experience01 from '../assets/img/experience01.png';
import experience02 from '../assets/img/experience02.png';
import experience03 from '../assets/img/experience03.png';
import experience04 from '../assets/img/experience04.png';
import gif01 from '../assets/img/animation01.gif';
import gif02 from '../assets/img/animation02.gif';
import gif03 from '../assets/img/animation03.gif';

const Experience = ( { open, active01, active02, id}) => {
    
    return(

       <div className={ open ? "experienceWrap active" : "experienceWrap "} id={id}>
          <div className="boxPadding textBox">
             <ul className={ active01 ? "experiBox active title" : "experiBox title" }>
                <p>My</p>
                <p>Work Experience</p>
             </ul>
             <ul className='subTitle'>
               <p>2022.02 ~ 2023.04 _ WEB PUBLISHER</p>
             </ul>
          </div>
          <div className={ active02 ? "workInfo active " : "workInfo" }>
             <ul>
               <span>1.</span>
               <li>
                  <p><strong>UI UX 기획 _ </strong> 어도비 XD를 활용한 UI UX 기획</p><em></em></li>
               <li className='imgBox'>
                  <img src={experience01} alt="experience01" />
                  <img src={experience02} alt="experience02" />
                  <img src={experience03} alt="experience03" />
                  <img src={experience04} alt="experience04" />
               </li>
             </ul>
             <ul>
               <span>2.</span>
               <li><p><strong>웹사이트 퍼블리싱 _ </strong> 자바스크립트 및 제이쿼리를 이용한 소스개발, 데이터연결</p><em></em></li>
               <li className='gifList'>
                  <img src={gif01} alt="experience01" />
                  <img src={gif02} alt="experience02" />
                  <img src={gif03} alt="experience03" />
               </li>
             </ul>
          </div>
       </div>

    )
}

export default Experience;