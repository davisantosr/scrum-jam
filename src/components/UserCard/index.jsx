import { Container, Circle, Text } from './styles'

import styles from './user-card.module.css'

export default function UserCard({ srcObject }) {
  const setVideo = (video) => {
    if (video) {
      video.srcObject = srcObject
    }
  }
  return (
    <Container>
      {!srcObject && <Circle>
        <Text>GC</Text>
      </Circle>}
      {srcObject &&
        <video className={styles.video} autoPlay muted playsInline ref={setVideo}></video>}
    </Container>
  )
}
