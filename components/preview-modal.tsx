'use client';

import usePreviewModal from '@/hooks/use-preview-modal';
import Modal from '@/components/ui/modal';
import Galery from '@/components/galery';
import Info from '@/components/info';

const PreviewModal = () => {
   const { data: products, isOpen, onClose } = usePreviewModal();

   if (!products) {
      return null;
   }

   return (
      <Modal open={isOpen} onClose={onClose}>
         <div className='grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8'>
            <div className='sm:col-span-2 lg:col-span-5'>
               <Galery images={products.images} />
            </div>
            <div className='sm:col-span-8 lg:col-span-7'>
               <Info data={products} />
            </div>
         </div>
      </Modal>
   );
};

export default PreviewModal;
