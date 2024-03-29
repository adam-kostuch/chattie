import * as Avatars from 'src/assets/avatars';
import { Chatter } from 'src/types';

export const emptyChatter: Chatter = {
  displayName: '',
  email: '',
  profileUrl: '',
  hasUnreadMessages: false,
};

export const chattieChatter: Chatter = {
  displayName: 'CHATTIE',
  email: 'nice to meet you!',
  profileUrl: '',
  hasUnreadMessages: false,
};

export const mappedAvatarImages: string[] = Object.values(Avatars);
