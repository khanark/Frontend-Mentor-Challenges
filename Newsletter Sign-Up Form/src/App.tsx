import { Button, Perk, SuccessDialog } from './components/shared/shared.module';
import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import {
  ErrorMessages,
  RegularExpressions,
  images,
  perks,
} from './assets/constants/constants';

import { useDialog } from './hooks/useDialog';

interface InputState {
  value: string;
  error: string;
}

function App() {
  const [input, setInput] = useState<InputState>({ value: '', error: '' });
  const [confirm, setConfirm] = useState<boolean>(false);
  const { isOpen, openDialog, closeDialog } = useDialog();
  const inputRef = useRef<HTMLInputElement>(null);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;
    if (value && !RegularExpressions.email.test(value)) {
      setInput((prev) => ({ ...prev, error: ErrorMessages.Email }));
      setConfirm(false);
    } else {
      setInput(() => ({ value: value, error: '' }));
      setConfirm(true);
    }
  };

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!confirm) {
      return;
    }
    if (!input.value || !inputRef.current) {
      setInput((prev) => ({ ...prev, error: ErrorMessages.Required }));
      return;
    }
    openDialog();
    if (inputRef.current) {
      inputRef.current.value = '';
      setInput((prev) => ({ ...prev, value: '' }));
    }
  };

  return (
    <div className='relative min-h-screen z-0 md:h-screen flex items-center justify-center bg-charcoal-gray'>
      <SuccessDialog
        email={input.value}
        isOpen={isOpen}
        closeDialog={closeDialog}
      />
      <div className='w-2xl md:rounded-3xl md:p-6 bg-white flex flex-col md:flex-row items-center gap-6'>
        <div className='order-2 md:order-1 md:w-1/2 p-8 md:p-10'>
          <h1 className='text-5xl md:text-6xl font-bold text-dark-slate-gray mb-8'>
            Stay updated!
          </h1>
          <p className='text-charcoal-gray mb-8 text-wrap'>
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <ul className='flex flex-col gap-2 mb-10'>
            {perks.map((perk, i) => (
              <Perk key={i} perk={perk} />
            ))}
          </ul>
          <form onSubmit={submitForm}>
            <div className='formGroup mb-6'>
              <div className='flex space mb-2'>
                <label
                  className='flex-1 text-dark-slate-gray text-sm font-bold'
                  htmlFor='email'
                >
                  Email address
                </label>
                {input.error && (
                  <p className='ml-auto text-red-500 text-sm font-bold'>
                    {input.error}
                  </p>
                )}
              </div>
              <input
                onChange={onInputChange}
                className={
                  'block w-full p-3 outline-none bg-transparent rounded-lg text-lg border ' +
                  (input.error.length > 0
                    ? 'border-red-500 error text-red-500'
                    : 'border-dark-slate-gray')
                }
                type='text'
                ref={inputRef}
                placeholder='Type your email address..'
              />
            </div>
            <Button variant='gradient' />
          </form>
        </div>
        <div className='order-1 md:order-2 md:w-1/2'>
          <img
            className='hidden md:block object-center w-full h-auto'
            src={images.desktop}
            alt='sign'
          />
          <img
            className='md:hidden object-center w-full h-auto'
            src={images.mobile}
            alt='sign'
          />
        </div>
      </div>
    </div>
  );
}

export default App;
