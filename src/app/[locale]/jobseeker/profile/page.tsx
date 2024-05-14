import { Link } from '@/navigation';

export default function EmployerProfile() {
  return (
    <div className='container'>
      <Link href='/' className='text-blue'>
        Back
      </Link>
      <h1 className='text-3xl'>Job Seeker Profile</h1>
    </div>
  );
}
