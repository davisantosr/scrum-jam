import { MdClose } from 'react-icons/md'
import { BackDrop, Container, TitleBar } from './styles'

export default function Modal({ isVisible, handleClose, children }) {
  return (
    isVisible && (
      <BackDrop>
        <Container>
          <TitleBar>
            <p>Compartilhar Link</p>
            <MdClose size={25} onClick={handleClose} />
          </TitleBar>
          {children}
        </Container>
      </BackDrop>
    )
  )
}
