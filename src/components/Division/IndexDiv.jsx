import React from 'react'
import Icon1 from '../../images/office.svg'
import Icon2 from '../../images/tour-n-travel.svg'
import Icon3 from '../../images/kuliner.svg'
import Icon4 from '../../images/sandang-pangan.svg'
import Icon5 from '../../images/pnr.svg'
import {DivisionContainter, 
    DivisionCard, 
    DivisionWrapper, 
    DivisionH1, 
    DivisionH2, 
    DivisionIcon,
    DivisionP1 
} from './DivisonElement'
const division = () => {
    return (
        <DivisionContainter id="division">
            <DivisionH1>Our Division</DivisionH1>
            <DivisionWrapper>
                <DivisionCard>
                    <DivisionIcon src={Icon1} />
                    <DivisionH2>Beegency</DivisionH2>
                    <DivisionP1>Division available right now</DivisionP1>
                </DivisionCard>
                <DivisionCard>
                    <DivisionIcon src={Icon2} />
                    <DivisionH2>Tour and Travel</DivisionH2>
                    <DivisionP1>Division available right now</DivisionP1>
                </DivisionCard>
                <DivisionCard>
                    <DivisionIcon src={Icon3} />
                    <DivisionH2>Cullinary</DivisionH2>
                    <DivisionP1>Division available right now</DivisionP1>
                </DivisionCard>
                <DivisionCard>
                    <DivisionIcon src={Icon4} />
                    <DivisionH2>Storage Unit</DivisionH2>
                    <DivisionP1>Division available right now</DivisionP1>
                </DivisionCard>
                <DivisionCard>
                    <DivisionIcon src={Icon5} />
                    <DivisionH2>Pnr</DivisionH2>
                    <DivisionP1>Division available right now</DivisionP1>
                </DivisionCard>
            </DivisionWrapper>
        </DivisionContainter>
    )
}

export default division
