import { useState } from 'react'
import MediaControls from '../../components/MediaControls'
import Modal from '../../components/Modal'
import UserCard from '../../components/UserCard'
import Layout from '../_layout'
import { Container, Button, LocalVideo } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { MediasActions, MediasSelectors } from '../../modules/medias/reducer'

export default function Home() {
  const [show, setShow] = useState(true)
  const dispatch = useDispatch()
  const localVideo = useSelector(MediasSelectors.localVideoStream)

  async function handleInit() {
    await dispatch(MediasActions.shareVideo())
    await dispatch(MediasActions.shareAudio())
    setShow(false)
  }

  return (
    <Layout>
      <Modal isVisible={show} handleClose={() => setShow(!show)}>
        <div style={{ display: 'flex', flexDirection: 'column', color: '#fff' }} >
          Conteúdo da modal aqui
        </div>
        <Button onClick={handleInit}>Confirmar</Button>

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

        <LocalVideo>
          <UserCard srcObject={localVideo} />
        </LocalVideo>
      </Container>
    </Layout>
  )
}
