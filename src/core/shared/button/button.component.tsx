import React from 'react';
import { Button } from 'antd';
import { useLoginStyles } from './button.style';
export default function ButtonComponent({ children, type }: any) {
  const { signIn, signUp } = useLoginStyles();
  const buttonStyle = type === 'signIn' ? signIn : signUp;

  return (
    <Button type='primary' htmlType='submit' block className={buttonStyle}>
      {children}
    </Button>
  );
}
