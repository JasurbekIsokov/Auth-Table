import { useState } from 'react';

import * as AuthModules from '@/modules/auth';

import * as Fields from '@/containers/Fields';

import Button from '@/components/Button';

import { IconHOC } from '@/components/Icon';

import classes from './Auth.module.scss';

const Auth = () => {
  const [isHide, setIsHide] = useState(false);

  return (
    <div className={classes.wrapper}>
      <div className={classes.wrapperLeft}>
        <main className={classes.main}>
          <div className={classes.form}>
            <div className={classes.formTitle}>Tizimga kirish</div>
            <AuthModules.Forms.Login>
              {({ isLoading }) => {
                return (
                  <div className={classes.formInner}>
                    <Fields.Text
                      placeholder="User name"
                      size="sm"
                      name="userName"
                      iconPrefix={<IconHOC name="UserCircle" />}
                    />

                    <Fields.Text
                      placeholder="Password"
                      type={isHide ? 'text' : 'password'}
                      size="sm"
                      name="password"
                      iconPrefix={<IconHOC name="Lock" />}
                      iconSuffix={
                        <IconHOC name={!isHide ? 'EyeDisable' : 'Eye'} key={!isHide ? 'EyeDisable' : 'Eye'} />
                      }
                      onIconSuffix={() => {
                        setIsHide(!isHide);
                      }}
                    />

                    <Button
                      disabled={isLoading}
                      block
                      title="Tizimga kirish"
                      htmlType="submit"
                      variant="blue"
                      type="primary"
                      size="small"
                    />
                  </div>
                );
              }}
            </AuthModules.Forms.Login>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Auth;
