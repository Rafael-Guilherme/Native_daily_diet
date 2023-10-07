import styled, { css } from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    padding: 24px;
`

export const TextMeal = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_2};
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `}
`