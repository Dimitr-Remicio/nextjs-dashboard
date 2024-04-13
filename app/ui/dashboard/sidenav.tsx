import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 items-end">
      <Link
        className="mb-2 flex items-end justify-end"
        href="/"
      >
      </Link>
      <div className="flex grow space-x- md:flex-row md:space-x-0 md:space-y-1 items-baseline gap-5 w-120 place-items-start pr-10">
        <NavLinks />
      </div>
    </div>
  );
}
