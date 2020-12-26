import React from 'react'

import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesDesc, ServicesH2} from './ServicesElements'

const Services = () => {
    return (
        <>
            <ServicesContainer id='services'>
                <ServicesH1>Our Services</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={require('../images/Productreview.svg').default} alt='Product Review' />
                        <ServicesH2>Application Development</ServicesH2>
                        <ServicesDesc>Web Apps, Mobile Apps, Desktop Apps</ServicesDesc>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={require('../images/Reportwriting.svg').default} alt='Report Writing' />
                        <ServicesH2>Report Writing</ServicesH2>
                        <ServicesDesc>0% pliagiarism guarantee (in any reports)</ServicesDesc>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={require('../images/ResearchReport.svg').default} alt='Report Writing' />
                        <ServicesH2>Final Year Thesis</ServicesH2>
                        <ServicesDesc>Help with research, literature and summary reports.</ServicesDesc>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>

        </>
        
    )
}

export default Services
