
import styled from 'styled-components/native';


export const IconBottom = styled.View`
    margin-top: -20px;
`

export const TextIcon = styled.Text<{ textSize: number }>`
    font-family: 'SF_PRO_ROUNDED_TWO';
    font-size: ${(props) => props.textSize}px;
    font-weight: ${(props) => props.textSize === 16 ? 600 : 'normal'};
`
export const IconTextContainer = styled.View<{
    textPosition: 'bottom' | 'right' | 'reverse'
}>`
    display: flex;
    flex-direction: ${(props) => props.textPosition === 'bottom' ? 'column' : props.textPosition === 'reverse' ? 'column-reverse' : 'row'};
    gap: 4px;
    align-items: center;
    margin-top: ${(props) => (props.textPosition === 'bottom') ? '15px' : '0px'};
`

