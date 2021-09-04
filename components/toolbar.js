import { useRouter } from 'next/router';

export const Toolbar = () => {
  const router = useRouter();

  return (
    <div className="flex flex-row content-center justify-between w-4/5 mx-auto font-sans text-center shadow sm:items-baseline">
      <div onClick={() => router.push('/')}>Home</div>
      <div onClick={() => router.push('/news/1')}>News</div>
      <div onClick={() => router.push('/datalist')}>DataList</div>
      <div onClick={() => (window.location.href = 'https://github.com/AndrewJBateman')}>Github</div>
    </div>
  );
};