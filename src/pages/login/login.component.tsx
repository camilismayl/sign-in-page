import { Card, Form, Input } from 'antd';
import { useLoginStyles } from './login.style';
import { useMemo, useState } from 'react';
import useLocalization from 'assets/lang';
import { FormRule } from 'antd';
import { ILoginFormValues } from './login';
import ButtonComponent from 'core/shared/button/button.component';
const LoginComponent = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const translate = useLocalization();

  const {
    title,
    page,
    subtitle,
    card,
    p,
    input,
    placeholder,
    forgotPassword,
    or,
  } = useLoginStyles();
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
      className={`${page} py-50 px-20   d-flex justify-center align-center `}
    >
      <div>
        <Card className={`${card} px-20 py-26`}>
          <div className=''>
            <div className=' mb-38 text-center '>
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
              name='email'
              label={<p className={p}>Enter your username or email address</p>}
            >
              <Input
                placeholder='Username or email address'
                className={`${input} ${'pl-25'} ${placeholder}`}
              />
            </Form.Item>
            <Form.Item
              className='mb-0'
              label={<p className={p}>Enter your Password</p>}
              name='password '
            >
              <Input.Password
                placeholder='Password'
                className={`${input} ${'pl-25'} ${placeholder}`}
                type='password'
              />
            </Form.Item>
            <Form.Item className='text-right'>
              <a className={`${'login-form-forgot'} ${forgotPassword}`} href=''>
                Forgot password
              </a>
            </Form.Item>
            <div>
              <ButtonComponent
                className='w-100  '
                type='signIn'
                htmlType='submit'
              >
                Sign in
                {/* {translate('login_sign_in_button')} */}
              </ButtonComponent>
              <div className='my-33 text-center'>
                {' '}
                <p className={or}> OR</p>
              </div>
              <ButtonComponent
                className='w-100'
                type='signUp'
                htmlType='submit'
              >
                Sign up
                {/* {translate('login_sign_in_button')} */}
              </ButtonComponent>
            </div>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default LoginComponent;
