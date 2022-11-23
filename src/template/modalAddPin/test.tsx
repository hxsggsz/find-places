import { Submit } from "../../components/button/button";
import { render, screen, fireEvent } from "@testing-library/react";

describe('<Submit />', () => {
  it('should submit the form', () => {
    const { getByRole } = render(<Submit type="submit">Enviar</Submit>)

    const submit = getByRole('button', { name: /Enviar/i })

    expect(submit).toHaveAttribute('type', 'submit');
  });
});