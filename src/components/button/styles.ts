import { Pressable } from 'react-native'
import styled, { css } from 'styled-components/native'

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY'

type Props = {
    type: ButtonTypeStyleProps
}

export const Container = styled(Pressable)<Props>`
    flex: 1;
    flex-direction: row;
    margin-top: 8px;
    min-height: 50px;
    max-height: 50px;

    background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GRAY_2 : theme.COLORS.WHITE};

    border-radius: 6px;
    justify-content: center;
    align-items: center;
`

export const Title = styled.Text`
    margin-left: 8px;
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${theme.COLORS.WHITE};
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}
`
