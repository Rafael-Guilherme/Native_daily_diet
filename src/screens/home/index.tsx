import { View } from 'react-native'
import { Container, TextMeal } from './styles'
import { Plus } from 'phosphor-react-native'
import Header from '@components/header'
import PercentMeals from '@components/percentMeals'
import { Button } from '@components/button'

const Home = () => {
  return (
    <Container>
        <Header />
        <PercentMeals />
        <View>
            <TextMeal>
                Refeições
            </TextMeal>
            <Button
              icon={
                <Plus 
                  color='#fff'
                  size={18}
                />
              } 
              title='Nova refeição' 
            />
        </View>
    </Container>
  )
}

export default Home