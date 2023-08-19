export function Perk(props: { perk: string }) {
  return (
    <li className='flex gap-5 items-center'>
      <span className='w-6 h-6 flex-shrink-0 flex-grow-0 bg-primary rounded-full flex items-center justify-center overflow-hidden'>
        <svg
          className='icon'
          xmlns='http://www.w3.org/2000/svg'
          height='1em'
          viewBox='0 0 448 512'
        >
          <path d='M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z' />
        </svg>
      </span>
      <span className='text-charcoal-gray'>{props.perk}</span>
    </li>
  );
}
