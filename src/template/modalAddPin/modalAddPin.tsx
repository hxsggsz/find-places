import { useRouter } from 'next/router'
import { StyledInfo } from ".";
import { CircleNotch, X } from "phosphor-react";
import { InputTypes } from "./types";
import { FormEvent, useState } from "react";
import { Modal } from "../../components/modal/modal";
import { Input } from "../../components/input/input";
import { gql, useMutation, } from "@apollo/react-hooks";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Submit } from "../../components/button/button";
import { ValidationResolvers } from "./validations/validations";

const CREATE_PIN = gql`
  mutation createPins($name: String!, $image: String, $latitude: Float!, $longitude: Float!, $description: String ) {
    createPins(input: { name: $name, image: $image, latitude: $latitude, longitude: $longitude, description: $description}) {
      name
      image
      latitude
      longitude
      description
    }
  }
`

export const ModalAddPin: React.FC = () => {
  const router = useRouter()
  const [modal, setModal] = useState(false)
  const [info, setInfo] = useState(false)
  const [values, setValues] = useState<InputTypes>({ Nome: '', Imagem: '', Latitude: '', Longitude: '', Descrição: '' })

  const formMethod = useForm<InputTypes>({
    resolver: ValidationResolvers,
  })
  const { formState: { errors }, register, handleSubmit } = formMethod

  const [createPins, { loading }] = useMutation(CREATE_PIN)

  function handleChange(e: FormEvent<HTMLInputElement>) {
    const value = e.currentTarget.value
    const name = e.currentTarget.name
    setValues({
      ...values,
      [name]: value
    })
  }

  const onSubmit: SubmitHandler<InputTypes> = (data) => {
    console.log(data)
    createPins({
      variables: {
        name: data.Nome, image: data.Imagem, latitude: data.Latitude, longitude: data.Longitude, description: data.Descrição
      }
    })

    setModal(false)
    router.reload()
  }

  return (
    <>
      <Button onClick={() => setModal(!modal)}>{modal ? <X /> : '+'}</Button>
      {modal && (
        <Modal.Root>
          <Modal.Container>
            <Modal.Title>
              <h1>Adicione uma nova localização!</h1>
              <Modal.Icon onClick={() => setModal(!modal)} ><X size={20} /></Modal.Icon>
            </Modal.Title>
            <Modal.Body>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Input.Root>
                  <Input.Label>Nome*</Input.Label>
                  <Input.Content
                    {...register("Nome")}
                    name="Nome"
                    autoFocus
                    value={values.Nome}
                    onChange={handleChange}
                    placeholder="nome aqui!"
                  />
                  {errors.Nome?.message && (
                    <Input.Error>{errors.Nome?.message}</Input.Error>
                  )}
                </Input.Root>

                <Input.Root>
                  <Input.Label>Imagem:</Input.Label>
                  <Input.Content
                    {...register("Imagem")}
                    name="Imagem"
                    value={values.Imagem}
                    onChange={handleChange}
                    placeholder="Imagem aqui!"
                  />
                  {errors.Imagem?.message && (
                    <Input.Error>{errors.Imagem?.message}</Input.Error>
                  )}
                </Input.Root>

                <Input.Root>
                  <Input.Label>Latitude*</Input.Label>
                  <Input.Content
                    {...register("Latitude")}
                    name="Latitude"
                    value={values.Latitude}
                    onChange={handleChange}
                    placeholder="Latitude aqui!"
                  />
                  <StyledInfo>
                    <span onClick={() => setInfo(!info)}>Como descobrir a Latitude?</span>
                    {info && (
                      <div className="descricao">
                        <span>Dentro do Google Maps, depois de achar o lugar que deseja, clique com o botão direito do mouse e irá aparecer a Latitude e Longitude do lugar na mesma ordem!</span>
                      </div>
                    )}
                  </StyledInfo>
                  {errors.Latitude?.message && (
                    <Input.Error>{errors.Latitude?.message}</Input.Error>
                  )}
                </Input.Root>
                <Input.Root>
                  <Input.Label>Longitude*</Input.Label>
                  <Input.Content
                    {...register("Longitude")}
                    name="Longitude"
                    value={values.Longitude}
                    onChange={handleChange}
                    placeholder="Longitude aqui!"
                  />
                  {errors.Longitude?.message && (
                    <Input.Error>{errors.Longitude?.message}</Input.Error>
                  )}
                </Input.Root>

                <Input.Root>
                  <Input.Label>Descrição:</Input.Label>
                  <Input.Content
                    {...register("Descrição")}
                    name="Descrição"
                    value={values.Descrição}
                    onChange={handleChange}
                    placeholder="Descrição aqui!"
                  />
                  {errors.Descrição?.message && (
                    <Input.Error>{errors.Descrição?.message}</Input.Error>
                  )}
                </Input.Root>
                <Submit type="submit" >{loading ? <CircleNotch size={20} /> : 'Enviar'}</Submit>
              </form>
            </Modal.Body>
          </Modal.Container>
        </Modal.Root>
      )}
    </>
  )
}