import Hero from '@/sections/Hero';
import Introduction from '@/sections/Introduction';
import Authorization from '@/sections/Authorization';

const Page = () => {
  return (
    <div className="bg-white">
      <Hero />
      <Introduction />
      <Authorization />
    </div>
  );
};
export default Page;
