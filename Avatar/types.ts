export interface IAvatar {
  edit?: boolean;
  userName?: string;
  imgSrc: string | undefined;
  width?: string | number;
  height?: string | number;
  type?: 'small' | 'circle' | 'large';
  color?: 'primary';
  className?: string;
  onUpdateUserPhoto?: () => void;
}
