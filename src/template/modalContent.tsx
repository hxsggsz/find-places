import { Modal } from '../components/modal/modal'
import { Eye, EyeClosed, X } from 'phosphor-react'
import { StyledEye } from '.'
import { useState } from 'react'

export const ModalContent: React.FC = () => {
  const [modal, setModal] = useState(false)
  return (
    <>
      {modal && (
        <Modal.Root >
          <Modal.Container>
            <Modal.Title >
              <h1>Sobre o projeto💪</h1>
              <Modal.Icon onClick={() => setModal(false)}>
                <X data-testid='close' size={20} />
              </Modal.Icon>
            </Modal.Title>
            <Modal.Body>
              <h1>O que é esse projeto?🤓</h1>
              <p>Encontre lugares lindos e famosos por todo o mundo para visitar! Esse site é um projeto de estudo Fullstack meu, criando uma API própia com o Apollo server/GraphQL com MySQL como banco de dados</p>
            </Modal.Body>
          </Modal.Container>
        </Modal.Root>
      )}

      <StyledEye onClick={() => setModal(!modal)}>
        {modal ? <EyeClosed data-testid='closeEye' size={20} /> : <Eye data-testid='openEye' size={20} />}
      </StyledEye>
    </>
  )
}