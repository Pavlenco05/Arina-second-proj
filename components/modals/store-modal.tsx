"use client";

import {Modal} from  "@/components/ui/modal";

export cons StoreModal = () => {
    const StoreModal = useStoreModal();

    return(
    <Modal 
     title="Creat store"
     description="Add a new store to manage products and categories"
     isOpen={storeModal.inOpen}
     onClose={storeModal.onClose}
     >
     Future Create Store From 
     </Modal>
    );
    };