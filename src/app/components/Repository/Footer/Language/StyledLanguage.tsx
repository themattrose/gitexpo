import styled from 'styled-components'

export const StyledLanguage = styled.span`
    font-size: 12px;
    color: #8b949e;
    box-sizing: border-box;
`

export const StyledLanguageColor = styled.span`
    width: 12px;
    height: 12px;
    line-height: 18px;
    background-color: ${props => props.color && props.color};
    display: inline-block;
    border-radius: 50%;
`
