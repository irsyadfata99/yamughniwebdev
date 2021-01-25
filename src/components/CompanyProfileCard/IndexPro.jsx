import React from 'react'
import Icon1 from '../../images/vector/pa-gani.svg'
import Icon2 from '../../images/vector/pa-sally.svg'
import Icon3 from '../../images/vector/pa-zaenal.svg'
import Icon4 from '../../images/vector/pa-eri.svg'
import Icon5 from '../../images/bu-endar.svg'
import Icon6 from '../../images/vector/pa-deni.svg'
import Icon7 from '../../images/vector/bu-isye.svg'
import Icon8 from '../../images/vector/bu-imas.svg'
import Icon9 from '../../images/vector/pa-eri.svg'
import {ProductContainter, 
    ProductCard, 
    ProductWrapper, 
    ProductH1, 
    ProductH2, 
    ProductIcon,
    ProductP1 
} from './ProductElement'
const product = () => {
    return (
        <ProductContainter id="product">
            <ProductH1>Our Team</ProductH1>
            <ProductWrapper>
                <ProductCard>
                    <ProductIcon src={Icon1} />
                    <ProductH2>Gani Ismail</ProductH2>
                    <ProductP1>Ketua Umum</ProductP1>
                </ProductCard>
                <ProductCard>
                    <ProductIcon src={Icon2} />
                    <ProductH2>Sally Hariadi A</ProductH2>
                    <ProductP1>Sekretaris 1 </ProductP1>
                </ProductCard>
                <ProductCard>
                    <ProductIcon src={Icon3} />
                    <ProductH2>Zaenal Hasan</ProductH2>
                    <ProductP1>Sekretaris 2</ProductP1>
                </ProductCard>
                <ProductCard>
                    <ProductIcon src={Icon4} />
                    <ProductH2>Eryanto</ProductH2>
                    <ProductP1>Bendahara</ProductP1>
                </ProductCard>
                <ProductCard>
                    <ProductIcon src={Icon5} />
                    <ProductH2>Endar Winarsih</ProductH2>
                    <ProductP1>Accounting</ProductP1>
                </ProductCard>
            {/* </ProductWrapper> */}
            {/* <ProductWrapper> */}
                <ProductCard>
                    <ProductIcon src={Icon6} />
                    <ProductH2>Deni Sulaeman</ProductH2>
                    <ProductP1>General Manager</ProductP1>
                </ProductCard>
                <ProductCard>
                    <ProductIcon src={Icon7} />
                    <ProductH2>Isye Nurliawati</ProductH2>
                    <ProductP1>Kepala Administrasi</ProductP1>
                </ProductCard>
                <ProductCard>
                    <ProductIcon src={Icon8} />
                    <ProductH2>Imas Komala</ProductH2>
                    <ProductP1>HUMAS</ProductP1>
                </ProductCard>
                <ProductCard>
                    <ProductIcon src={Icon9} />
                    <ProductH2>Joko</ProductH2>
                    <ProductP1>HRD</ProductP1>
                </ProductCard>
            </ProductWrapper>
        </ProductContainter>
    )
}

export default product
