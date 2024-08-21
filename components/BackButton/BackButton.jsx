'use client';
import { useRouter } from 'next/navigation';
import { FaArrowLeftLong } from 'react-icons/fa6';

const BackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <button onClick={handleBack} className="flex items-center space-x-2">
      <FaArrowLeftLong />
      <span className='nav-link'>Back</span>
    </button>
  );
};

export default BackButton;