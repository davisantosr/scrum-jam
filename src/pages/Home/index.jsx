import { useState } from 'react'
import MediaControls from '../../components/MediaControls'
import Modal from '../../components/Modal'
import UserCard from '../../components/UserCard'
import Layout from '../_layout'
import { Container, Button } from './styles'

export default function Home() {
  const [show, setShow] = useState(true)

  return (
    <Layout>
      <Modal isVisible={show} handleClose={() => setShow(!show)}>
        <div style={{ display: 'flex', flexDirection: 'column', color: '#fff' }} >
          Conteúdo da modal aqui
        </div>
        <Button>Confirmar</Button>

      </Modal>
      <Container>
        <MediaControls />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </Container>
    </Layout>
  )
}
