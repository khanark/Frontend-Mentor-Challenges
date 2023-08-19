import { Button } from './Button';

export function SuccessDialog(props: {
  email: string;
  buttonVariant?: string;
  isOpen?: boolean;
  closeDialog: () => void;
}) {
  return (
    <>
      {props.isOpen && (
        <>
          <div
            className='absolute h-full w-full z-30 bg-black/20 backdrop-blur-md'
            onClick={props.closeDialog}
          />
          <div className='z-30 w-full max-w-md p-12 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl flex flex-col gap-8'>
            <header>
              <span className='w-10 h-10 flex-shrink-0 flex-grow-0 bg-gradient-to-tr from-[#FC5379] to-primary rounded-full flex items-center justify-center overflow-hidden mb-8'>
                <svg
                  className='w-6 h-6 fill-white'
                  xmlns='http://www.w3.org/2000/svg'
                  height='1em'
                  viewBox='0 0 448 512'
                >
                  <path d='M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z' />
                </svg>
              </span>
              <h1 className='text-dark-slate-gray text-2xl md:text-6xl font-bold'>
                Thanks for subscribing!
              </h1>
            </header>
            <main>
              <p>
                A confirmation email has been sent to{' '}
                <span className='font-bold'>{props.email}</span> Please open it
                and click the button inside to confirm your subscription.
              </p>
            </main>
            <footer>
              <Button
                type='button'
                onClick={props.closeDialog}
                text='Dismiss message'
              />
            </footer>
          </div>
        </>
      )}
    </>
  );
}
