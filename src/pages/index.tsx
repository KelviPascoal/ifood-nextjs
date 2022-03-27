import { MiniCard } from 'components/MiniCard'
import type { NextPage } from 'next'
import { Button } from '../components/Button'

const Home: NextPage = () => {
  const props = {image: "https://static-images.ifood.com.br/image/upload/f_auto/webapp/landingV2/drinks.png",
  imageAlt: 'Bebidas',
  bgColor: "yellow",
  text: "bebidas",}
  return (
    <>
      <h1>Dream on, my little friend</h1>
      <Button>testeeee</Button>
      <br />
      <br />
      <br />
      <br />

      <MiniCard
      image="https://static-images.ifood.com.br/image/upload/f_auto/webapp/landingV2/drinks.png"
      imageAlt='Bebidas'
      bgColor="yellow"
      text="bebidas"
      />

    </>
  )
}

export default Home
