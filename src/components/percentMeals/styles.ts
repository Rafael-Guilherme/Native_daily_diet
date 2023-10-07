import  styled, { css } from 'styled-components/native'
import { ArrowUpRight} from 'phosphor-react-native'

export const Container = styled.View`
    flex-direction: column;
    width: 342px;
    height: 102px;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
    margin: 36px auto;
    border-radius: 8px;
    padding: 16px 8px;
`

export const ContainerText = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Percent = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_1};
        font-size: ${theme.FONT_SIZE.X2L}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}
`

export const SubText = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_2};
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `}
`

export const NewTab = styled.Pressable`
    flex: 1;
    width: 100%;
    align-items: flex-end;
`

export const UpRightIcon = styled(ArrowUpRight).attrs(({ theme }) => ({
    color: theme.COLORS.GREEN_DARK,
    size: 24
}))``