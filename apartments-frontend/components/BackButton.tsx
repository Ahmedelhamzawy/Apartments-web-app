import Link from 'next/link';

const BackButton = () => (
  <div className="mt-3">
    <Link href="/apartments" className="btn btn-secondary">
      ← Back
    </Link>
  </div>
);
export default BackButton;
