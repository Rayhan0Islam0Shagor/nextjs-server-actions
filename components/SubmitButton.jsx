'use client';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';

const SubmitButton = ({ value, loadingValue = 'loading...' }) => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="px-4 py-2 font-bold text-white bg-blue-500 rounded whitespace-nowrap hover:bg-blue-700"
      disabled={pending}
    >
      <span>{pending ? loadingValue : value}</span>
    </button>
  );
};

export default SubmitButton;
