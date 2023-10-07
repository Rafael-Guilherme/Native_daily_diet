import { styled } from 'styled-components/native'

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const Logo = styled.Image`
    width: 87px;
    height: 37px;
`

export const Photo = styled.View`
    width: 40px;
    height: 40px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_2};
    border: 2px;
    border-radius: 999px;
`