import { render, screen } from "@testing-library/react";
import CardHeader from "./CardHeader";
import '@testing-library/jest-dom';

describe('CardHeader Component', () => {
    test('renders correctly when inactive and not editing', () => {
        render(
            <CardHeader
                value="Test Header"
                inputChange={() => {}}
                onCancel={() => {}}
                onSave={() => {}}
                onChange={() => {}}
                onEdit={() => {}}
                isActive={false}
                editing={false}
                isDisableMode={false}
            />
        );
        expect(screen.getByText('Test Header')).toBeInTheDocument();
    });

    test('renders with yellow background when isActive is true', () => {
        render(
            <CardHeader
                value="Test Title"
                inputChange={() => {}}
                onCancel={() => {}}
                onSave={() => {}}
                onChange={() => {}}
                onEdit={() => {}}
                isActive={true}
                editing={false}
                isDisableMode={false}
            />
        );
        const headerElement = screen.getByText('Test Title').closest('div');
        expect(headerElement).toHaveStyle('border: 1px solid yellow');
    });
    test('renders correctly when inactive and editing', () => {
        render(
            <CardHeader
                value="Test Header"
                inputChange={() => {}}
                onCancel={() => {}}
                onSave={() => {}}
                onChange={() => {}}
                onEdit={() => {}}
                isActive={false}
                editing={true}
                isDisableMode={false}
            />
        );
        expect(screen.getByText('Cancel')).toBeInTheDocument();
    });
    test('renders correctly when View mode', () => {
        render(
            <CardHeader
                value="Test Header"
                inputChange={() => {}}
                onCancel={() => {}}
                onSave={() => {}}
                onChange={() => {}}
                onEdit={() => {}}
                isActive={false}
                editing={false}
                isDisableMode={true}
            />
        );
        const editingButton = screen.queryByText('Editing');
        expect(editingButton).not.toBeInTheDocument();
    });

});