import { ModalContent } from './modalContent'
import { render, waitFor, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('<ModalContent />', () => {
  it('should render the button to open modal', () => {
    const { getByTestId } = render(<ModalContent />)

    const openEye = getByTestId('openEye')

    expect(openEye).toBeInTheDocument()
  });

  it('should open modal', async () => {
    const { getByRole, queryByText, baseElement } = render(<ModalContent />)
    const openEye = getByRole('button')

    userEvent.click(openEye)
    expect(baseElement).toMatchSnapshot();

    await waitFor(() => {
      return expect(queryByText('Sobre o projeto💪')).toBeInTheDocument()
    })
  });
});