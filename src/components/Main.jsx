import React , { useState, useEffect } from 'react';
import Img from '../assets/img/portfolio.png';
import { letterEvent  } from '../js/mainEvt';
import Experience from './Experience.jsx';
import Myproject from './Myproject.jsx';
import Website from './Website.jsx';
import Page from './Pages.jsx';
import Navi from './Navi.jsx';

const Main = () => {

     const [ background, setBackground ] = useState();
     const [ textSpeed,  setTextSpeed] = useState();
     const [ expOpen , setexpOpen ] = useState();
     const [ prjOpen , setprjOpen ] = useState();
     const [ expActive01,  setexpActive01 ] = useState();
     const [ expActive02,  setexpActive02 ] = useState();
     const [ prjActive01, setprjActive01 ] = useState();
     const [ prjOpacity01, setprjOpacity01 ] = useState();
     const [ prjOpacity02, setprjOpacity02 ] = useState();
     const [ prjOpacity03, setprjOpacity03 ] = useState();
     const [ websiteOpen , setwebsiteOpen ] = useState();
     const [ webActive , setwebActive ] = useState();
     const [ webOpacity , setwebOpacity ] = useState();
     const [ navi, setNavi ] = useState();

     useEffect(() => {

      letterEvent();
      const scrollEvt = () => {

          window.addEventListener("scroll" , () => {
           
            const scrollY = window.scrollY;
            if(scrollY > 100){
               setBackground(true);
                    setTimeout(() => {
                         setTextSpeed(true)
                         setexpOpen(true);
                    },100)
            };
            if(scrollY > 600){
               setexpActive01(true)
                    setTimeout(() => {
                         setexpActive02(true)
                    },1000)
            }; 
            if(scrollY > 2800){
               setprjOpen(true);
                    setTimeout(() => {
                         setprjActive01(true);
                    },100)
             };
             if(scrollY > 3500){
                 setprjOpacity01(true);
             }
             if(scrollY > 4500){
                 setprjOpacity02(true);
             }
             if(scrollY > 5500){
                 setprjOpacity03(true);
             }
             if(scrollY > 6500){
                 setwebsiteOpen(true);
                 setTimeout(() => {
                    setwebActive(true)
                    setwebOpacity(true)
                    setNavi(true);
                 },100)
             }


          })
      };

      scrollEvt();

     },[])
   
     return(
        <Page 
         header={<Navi active={navi}></Navi>}
         >       
         <div className="main">
            <div className="textBox">
                <ul>
                    <li><span><em>I</em><em>'</em><em>M</em><br/>
                    <em>S</em><em>O</em><em>Y</em><em>E</em><em>P</em><em>A</em><em>R</em><em>K</em></span></li>
               </ul>
                <ul className='profile'>
                    <img src={Img} alt="profile" />
               </ul>
           </div>
               <div className="text"><p>FrontEnd / Publisher</p></div>
               <div className="introduce"><p>Let me introduce myself</p></div>
                    <div className={ background ? "skills active" : "skills"}>
                         <ul className={ textSpeed ? 'skillsTitle active title' : 'skillsTitle title'}>
                              <p>I</p>
                              <p>DO</p>
                         </ul>
                         <ul className='skillsBox'>
                              <li>
                              <p>Html5</p><p>Css3</p><p>Javascript</p><p>React</p><p>Node.js</p>
                              <p>Vue</p><p>Mysql</p><p>PHOTOSHOP</p><p>ILLUSTRATOR</p></li>
                         </ul>
                    </div>
              </div>
            <Experience id={'experience'} open={expOpen} active01={expActive01} active02={expActive02}/>
            <Myproject id={'myproject'} open={prjOpen} active={prjActive01} prj01={prjOpacity01} prj02={prjOpacity02} prj03={prjOpacity03}/>
            <Website id={'mywebsite'} open={websiteOpen} active={webActive} opacity={webOpacity}/>
     </Page>

     )
}

export default Main;