import { Button, Card, Form, Input } from 'antd';
import { useLoginStyles } from './login.style';
import { useMemo } from 'react';
import useLocalization from 'assets/lang';
import { FormRule } from 'antd';
import { ILoginFormValues } from './login';
const LoginComponent = () => {
  const translate = useLocalization();

  const { title, page, panel, subtitle, card } = useLoginStyles();
  const initialValues: ILoginFormValues = {
    email: '',
    password: '',
  };
  const rules: { [key: string]: FormRule[] } = useMemo(
    () => ({
      email: [
        {
          required: true,
          message: translate('input_required'),
        },
        {
          // add a pattern for email regex
          pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
          message: translate('email_invalid'),
        },
      ],
      password: [
        {
          required: true,
          message: translate('input_required'),
        },
      ],
    }),
    [translate]
  );
  return (
    <div
      className={`${page} py-50 px-20 w-100 d-flex justify-center align-center`}
    >
      <div className={panel}>
        <Card className={card}>
          <div className=''>
            <div className=' mb-38 text-center mt-26'>
              <h1 className={title}>
                {translate('welcome_to')} Welcome to Site
              </h1>
              <p className={subtitle}>{} Sign in </p>
            </div>
          </div>
          <Form
            name='login'
            initialValues={initialValues}
            layout='vertical'
            size='large'
          >
            <Form.Item
              rules={rules.email}
              name='email'
              label='Enter your username or email address'
            >
              <Input />
            </Form.Item>
            <Form.Item
              rules={rules.password}
              name='password '
              label='Enter your Password'
            >
              <Input type='password' />
            </Form.Item>
            <div>
              <Button className='w-100 mb-33 ' type='primary' htmlType='submit'>
                {translate('login_sign_in_button')}
              </Button>
              {' OR'}
              <Button className='w-100 mt-33' type='primary' htmlType='submit'>
                {translate('login_sign_in_button')}
              </Button>
            </div>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default LoginComponent;
