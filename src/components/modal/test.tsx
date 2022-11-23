import { Modal } from "./modal";
import { render, fireEvent } from "@testing-library/react";

describe('<Modal>', () => {
  it('should render te close button', () => {
    const { getByRole } = render(<Modal.Icon onClick={close} >x</Modal.Icon>)
    
    const button = getByRole('button', { name: /x/i })

    expect(button).toBeInTheDocument()
  });
  it('should close modal', () => {
    const close = jest.fn()

    const { queryByRole } = render(<Modal.Icon onClick={close} >x</Modal.Icon>)

    const button = queryByRole('button', { name: /x/i })
    fireEvent.click(button)

    expect(close).toHaveBeenCalledTimes(1)
  });
});