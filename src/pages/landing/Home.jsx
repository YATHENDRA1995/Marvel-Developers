import Banner from "./components/banner/Banner"
import Features from "./components/features/Features"
import Partners from "./components/partners/Partners"
import Slackbot from "./components/slackbot/Slackbot"
import { HomeContainer } from "./Home.style"

const Home = () => {

  return (
    <HomeContainer>
      <Banner />
      <Features />
      <Partners />
      <Slackbot />
    </HomeContainer>
  )
}

export default Home