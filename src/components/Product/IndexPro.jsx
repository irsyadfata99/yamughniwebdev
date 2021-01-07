import React from 'react'
import Icon1 from '../../images/office.svg'
import Icon2 from '../../images/tour-n-travel.svg'
import Icon3 from '../../images/kuliner.svg'
import Icon4 from '../../images/sandang-pangan.svg'
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
            <ProductH1>Our Product</ProductH1>
            <ProductWrapper>
                <ProductCard>
                    <ProductIcon src={Icon1} />
                    <ProductH2>Hammayim</ProductH2>
                    <ProductP1>Product available right now</ProductP1>
                </ProductCard>
                <ProductCard>
                    <ProductIcon src={Icon2} />
                    <ProductH2>Habbatussauda</ProductH2>
                    <ProductP1>Product available right now</ProductP1>
                </ProductCard>
                <ProductCard>
                    <ProductIcon src={Icon3} />
                    <ProductH2>YFC</ProductH2>
                    <ProductP1>Product available right now</ProductP1>
                </ProductCard>
                <ProductCard>
                    <ProductIcon src={Icon4} />
                    <ProductH2>Sheva</ProductH2>
                    <ProductP1>Product available right now</ProductP1>
                </ProductCard>
            </ProductWrapper>
        </ProductContainter>
    )
}

export default product
