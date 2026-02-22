
import { ReactNode } from 'react';
import './Tooltip.css';

type Props = {
  tooltip: string;
  children: ReactNode;
  wrapperClassName?: string;
};

export default function Tooltip({ tooltip, children, wrapperClassName = '' }: Props) {
  return (
    <span className={`tooltip ${wrapperClassName}`} data-alt={tooltip} tabIndex={0}>
      {children}
    </span>
  );
}
