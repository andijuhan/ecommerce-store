import Container from '@/components/ui/container';
import Link from 'next/link';
import MainNav from './main-nav';
import getCategories from '@/actions/get-categories';
import NavbarAction from './navbar-action';

//export const revalidate = 60;

const Nabvar = async () => {
   const categories = await getCategories();

   return (
      <div className='border-b'>
         <Container>
            <div className='relative px-2 sm:px-6 lg:px-8 flex h-16 items-center'>
               <Link className='ml-4 lg:ml-0 flex gap-x-2' href='/'>
                  <p className='font-bold text-xl'>STORE</p>
               </Link>
               <MainNav data={categories} />
               <NavbarAction />
            </div>
         </Container>
      </div>
   );
};

export default Nabvar;
