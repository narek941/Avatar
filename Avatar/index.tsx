import React, { ComponentType } from 'react';
import classNames from 'classnames';

import Icon from '../Icon';
import { IconName } from '../Icon/types';

import styles from './Avatar.module.scss';
import { IAvatar } from './types';

const NO_IMAGE_SRC = '/src/assets/next.svg';
const IMAGE_IS_NOT_LOADED_SRC = '';

const Avatar: ComponentType<IAvatar> = ({
  edit,
  userName,
  imgSrc,
  width,
  height,
  className,
  color,
  type = 'circle',
  onUpdateUserPhoto,
  ...props
}: IAvatar) => {
  const getAvatarSrc = (): string => {
    switch (imgSrc) {
      case undefined:
        return IMAGE_IS_NOT_LOADED_SRC;
      case null:
        return NO_IMAGE_SRC;
      default:
        return imgSrc;
    }
  };

  const getAvatarClassName = (color?: string, size?: string): string => {
    return classNames(styles.avatarWrapper, className, {
      [styles['avatar-small']]: size === 'small',
      [styles['avatar-large']]: size === 'large',
      [styles['avatar-circle']]: size === 'circle',
      [styles['primary']]: color === 'primary',
    });
  };

  const avatarClassName: string = getAvatarClassName(color, type);

  return (
    <div className={avatarClassName} {...props}>
      <div
        style={{ display: imgSrc === undefined ? 'none' : 'block' }}
        className={classNames(styles.avatarBox)}
      >
        {
          <img
            src={getAvatarSrc()}
            width={width}
            height={height}
            alt={userName}
            className={styles.image}
          />
        }
      </div>
      <label>
        {edit && (
          <div className={styles.iconBox}>
            <Icon name={IconName.like} />
            <input
              type={'file'}
              hidden={true}
              accept='image/png, image/jpeg'
              onChange={onUpdateUserPhoto && onUpdateUserPhoto}
            />
          </div>
        )}
      </label>
    </div>
  );
};

export default Avatar;
