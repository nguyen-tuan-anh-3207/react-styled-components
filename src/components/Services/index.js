import React from 'react';
import {ServicesContainer, ServicesH1, ServicesH2, ServicesWrapper, ServicesCard, ServicesIcon, ServicesP} from './ServicesElement';
import Icon1 from './../../images/svg-1.svg';
const Services = () => {
    return (
        <ServicesContainer id ='services'>
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src = {Icon1}/>
                    <ServicesH2>Reduce expenses</ServicesH2>
                    <ServicesP>We help reduce your fess and increase your overall revenue</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src = {Icon1}/>
                    <ServicesH2>Virtual Office</ServicesH2>
                    <ServicesP>We help reduce your fess and increase your overall revenue</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src = {Icon1}/>
                    <ServicesH2>Premiun Benefits</ServicesH2>
                    <ServicesP>We help reduce your fess and increase your overall revenue</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
