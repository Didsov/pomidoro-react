
import { Header } from './Componets/Header/Header'
import { Logo } from './Componets/Header/Logo/Logo'
import { Navigation } from './Componets/Header/Navigation/Navigation'
import { Stats } from './Componets/Header/Navigation/Stats/Stats'
import { Layout } from './Componets/Layout/Layout'
import { Main } from './Componets/Main/Main'
import { TextBlock } from './Componets/Main/TextBlock/TextBlock'
import { TimerBlock } from './Componets/Main/TimerBlock/TimerBlock'

function App() {

  return (
    <Layout>
      
        <Header>
            <Logo/>
            <Navigation>
               <Stats/>
            </Navigation>
        </Header>
              <Main>
                <TextBlock/>
                <TimerBlock/>
            </Main>
    </Layout>
  )
}

export default App
