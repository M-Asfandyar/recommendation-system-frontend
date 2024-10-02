import { render, screen, fireEvent } from '@testing-library/react';
import UserInputForm from '../components/UserInputForm';

test('renders UserInputForm and submits user ID', () => {
  const mockSubmit = jest.fn();
  render(<UserInputForm onSubmit={mockSubmit} />);

  // Input the user ID and submit the form
  const input = screen.getByPlaceholderText(/Enter user ID/i);
  fireEvent.change(input, { target: { value: '1' } });

  const button = screen.getByText(/Submit/i);
  fireEvent.click(button);

  // Expect the form submission to be called
  expect(mockSubmit).toHaveBeenCalledWith('1');
});
