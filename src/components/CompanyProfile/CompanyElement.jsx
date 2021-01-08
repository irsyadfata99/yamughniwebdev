import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Container = styled.div`
    min-height: 692px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: #fff;
    );
`
export const Icon = styled(Link)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`