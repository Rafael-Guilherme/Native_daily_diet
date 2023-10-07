import { Container, Percent, SubText, UpRightIcon, NewTab, ContainerText } from './styles'

const PercentMeals = () => {
  return (
    <Container>
        <NewTab>
            <UpRightIcon />
        </NewTab>
        <ContainerText>
            <Percent>
                90,86%
            </Percent>
            <SubText>
                das refeições dentro da dieta
            </SubText>
        </ContainerText>
    </Container>
  )
}

export default PercentMeals