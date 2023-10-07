import { PressableProps } from 'react-native'
 
import { ButtonTypeStyleProps, Container, Title } from './styles'

type Props = PressableProps & {
    icon?: JSX.Element
    title: string;
    type?: ButtonTypeStyleProps
}

export function Button({ icon, title, type = 'PRIMARY', ...rest }: Props) {
    return (
        <Container type={type} {...rest}>
            {icon}

            <Title>
                {title}
            </Title>
        </Container>
    )
}