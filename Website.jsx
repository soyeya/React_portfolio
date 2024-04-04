import React from 'react';

const Website = ({ open , active, opacity, id }) => {
    return(
     <div className={ open ? "websiteWrap active" : "websiteWrap"} id={id}>
        <div className="websiteContent">
          <div className="websitetext textBox">
             <ul className={ active ? "websiteTitle title active" : "websiteTitle title" } >
                <p>My Websites</p>
             </ul>
          </div>
          <div className={ opacity ? "websiteBox active" : "websiteBox"}>
            <ul>
                <li><a href="https://soyeya.github.io/React_lush_/" target="_blank" rel="noreferrer noopener"><h3>React<strong>Lush</strong></h3><p><strong>INFO_ </strong>동물실험을 지양하고 친환경 제품을 제공하는 유명 바디브랜드 사이트구현</p></a></li>
                <li><a href="https://soyeya.github.io/React_tada/" target="_blank" rel="noreferrer noopener"><h3>React<strong>Tada</strong></h3><p><strong>INFO_ </strong>새로운 이동 기준을 제시하는 모빌리티 플랫폼 구현 </p></a></li>
                <li><a href="https://soyeya.github.io/vueBiffsite/" target="_blank" rel="noreferrer noopener"><h3>Vue<strong>Biff</strong></h3><p><strong>INFO_ </strong>부산국제영화제 사이트 구현 </p></a></li>
                <li><a href="https://soyeya.github.io/vueSchoolfood/" target="_blank" rel="noreferrer noopener"><h3>Vue<strong>SchoolFood</strong></h3><p><strong>INFO_ </strong>유명 음식점 브랜드 스쿨푸드 사이트 구현 </p></a></li>
            </ul>
          </div>
        </div>
     </div>
    )
}

export default Website;