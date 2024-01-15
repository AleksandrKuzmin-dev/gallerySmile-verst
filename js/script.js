const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector){
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              allModals = document.querySelectorAll('[data-modal-window]');

        trigger.forEach((item) => {
            item.addEventListener('click', (e) => {
                if (e.target){
                        e.preventDefault();
                        closeModal(allModals);
                            showModal(modal);
                    };
                });
            });

        close.addEventListener('click', () => {
            closeModal(allModals);
        });

        modal.addEventListener('click', (e) => {
            if(e.target === modal){
                closeModal(allModals);
            };
        });

        document.addEventListener('keydown', (e) => {
            if (e.code == 'Escape' && modal.style.display != 'none'){
                closeModal(allModals);
            };
        });
    };

    function showModal(modal){
       
            modal.classList.remove('none');
            document.body.style.overflow = 'hidden';
    };

    function closeModal(modals){
        modals.forEach(item =>  item.classList.add('none'));
        document.body.style.overflow = '';
    };

    bindModal('[data-modal="request"]', '.popup-request', '.popup-request__close');


};
modals();
