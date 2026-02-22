import React from 'react';
import './ItemGroup.css';

interface ItemGroupProps {
  title: React.ReactNode;
  color?: string;
  children?: React.ReactNode;
}

const ItemGroup = ({ title, color = 'var(--secondary-colour)', children }: ItemGroupProps) => {
  const style: React.CSSProperties = { borderColor: color } as React.CSSProperties;
  // set a CSS variable for the accent so CSS can style markers separately from text
  (style as any)['--item-accent'] = color;

  return (
    <div className='itemGroup' style={style}>
      <span className='itemGroup-title'>{title}</span>
      <div className='itemGroup-content'>
        {children}
      </div>
    </div>
  );
};

export default ItemGroup;
