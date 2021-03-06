import styled, { css } from 'styled-components'


export const SubBay = styled.div`
    position: fixed;
    bottom: ${p => p.posModifier ? '-40rem' : '-80rem'};
    z-index: 30;
    height: 80rem;
    width: 100%;

    text-align: right;
    padding: 1.5rem;
    background: linear-gradient(180deg, rgba(169,153,150,1) 0%, rgba(237,237,237,1) 50%);
    
    visibility: ${p => p.posModifier ? 'visible' : 'hidden'};
    transition: bottom 500ms;
    transition-timing-function: cubic-bezier(.46,-0.37,.57,1.24);

    i {
        margin-bottom: 1rem;
        font-size: 3rem;
        color: #fff;
        opacity: .3;
        cursor: pointer;
    }

    @media (min-width: 800px) { bottom: ${p => p.posModifier ? '-58rem' : '-80rem'}; }
    @media (min-width: 1280px) {
        position: absolute;
        right: ${p => p.posModifier ? '1%' : '-80rem'};
        top: 0;
        height: 41.5rem;
        width: 46.5rem;
        transition: right 500ms;
        transition-timing-function: cubic-bezier(.46,-0.37,.57,1.24);
    }
    @media (min-width: 1600px) { right: ${p => p.posModifier ? '10%' : '-80rem'}; }
    @media (min-width: 1800px) { right: ${p => p.posModifier ? '14%' : '-80rem'}; }
    @media (min-width: 2000px) { right: ${p => p.posModifier ? '18%' : '-80rem'}; }
    @media (min-width: 2500px) { right: ${p => p.posModifier ? '24%' : '-80rem'}; }
`
