import { BaseEntity } from '..';

export interface User extends BaseEntity {
  UserID?: string;
  FullName?: string;
  PhoneNumber?: string;
  Email?: string;
  Roles?: string;
  [key: string]: any;
}
