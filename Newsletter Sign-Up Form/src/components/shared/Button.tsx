export function Button(props?: {
  variant?: string;
  text?: string;
  onClick?: () => any;
  type?: 'submit' | 'button';
}) {
  return (
    <button
      type={props?.type || 'submit'}
      onClick={props?.onClick}
      className={
        'w-full p-3 text-lg font-medium rounded-md text-white ' +
        (props?.variant === 'gradient'
          ? 'bg-dark-slate-gray md:bg-gradient-to-r from-[#FC5379] to-primary md:shadow-2xl md:shadow-primary'
          : 'bg-dark-slate-gray')
      }
    >
      {props?.text ? props.text : 'Subscribe to monthly newsletter'}
    </button>
  );
}
