import { useCallback, useEffect, useMemo, useState } from "react";
import clsx from 'clsx';

interface Props {
  text: string;
  className?: string;
  children?: React.ReactNode;
}

export default function CopyButton(props: Props) {
  const [state, setState] = useState<'idle' | 'copied'>('idle');
  const [timerId, setTimerId] = useState<number | undefined>()
 
  const tooltip = useMemo(() => state === 'idle' ? 'Copy to clipboard' : 'Copied', [state]);

  useEffect(() => {
    if (state === 'copied') {
      clearTimeout(timerId);
      setTimerId(setTimeout(() => {
        setState('idle');
      }, 3000));
    }

    return () => {
      clearTimeout(timerId);
    }
  }, [state])

  const onClick = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(props.text);
      setState('copied');
    }  catch(error) {
      console.error(error);
    }
  }, [props.text, setState]);

  return (
    <button 
    className={`btn-xs relative ${props.className||''} tooltip tooltip-left font-normal`} 
    onClick={onClick}
    data-tip={tooltip}
    >

{/* copy */}
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
    className={clsx('feather feather-copy transition-all opacity-0 duration-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2', 
      state === 'idle' && 'opacity-100',
      state !== "idle" && 'rotate-45'
    ) }>
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>

{/* check */}
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
    className={clsx("feather feather-check opacity-0 transition-all duration-300",
      state=== 'copied' && 'opacity-100',
      state !== 'copied' && '-rotate-45'
    )}><polyline points="20 6 9 17 4 12"></polyline></svg>

    </button>
  )
}