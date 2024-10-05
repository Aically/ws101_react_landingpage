import React, { useEffect } from 'react';

const SignInModal = () => {
  useEffect(() => {
    const signInBtn = document.querySelector('.sign-in');
    const modal = document.getElementById('signInModal');
    const closeModal = document.querySelector('.close');

    const openModal = () => {
      modal.style.display = 'flex';
    };

    const closeModalHandler = () => {
      modal.style.display = 'none';
    };

    const windowClickHandler = (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    };

    signInBtn.addEventListener('click', openModal);
    closeModal.addEventListener('click', closeModalHandler);
    window.addEventListener('click', windowClickHandler);

    return () => {
      signInBtn.removeEventListener('click', openModal);
      closeModal.removeEventListener('click', closeModalHandler);
      window.removeEventListener('click', windowClickHandler);
    };
  }, []);

  return (
    <div className="modal" id="signInModal">
      <div className="modal-content">
        <span className="close">&times;</span>
        <h2>Sign In</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Sign In</button>
        <a href="#">Forgot Password?</a>
        <a href="#">Sign Up</a>
      </div>
    </div>
  );
};

export default SignInModal;
