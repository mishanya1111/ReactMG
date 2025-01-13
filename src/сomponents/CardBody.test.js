import { render, screen } from "@testing-library/react";
import CardBody from "./CardBody";
import '@testing-library/jest-dom';

describe('CardBody Component', () => {
    test('renders textarea when editing is true', () => {
        render(<CardBody editing={true} value="Test Body" onChange={() => {}} checked={false} />);
        const textarea = screen.getByRole('textbox');
        expect(textarea).toBeInTheDocument();
    });

    test('does not render a textarea when editing is false', () => {
        render(<CardBody editing={false} value="Test Body" checked={false} />);
        const textarea = screen.queryByRole('textbox');
        expect(textarea).not.toBeInTheDocument();
    });

    test('renders text when editing is false', () => {
        render(<CardBody editing={false} value="Test Body" checked={false} />);
        expect(screen.getByText('Test Body')).toBeInTheDocument();
    });
});