import { Account } from 'src/accounts/account.model';

export interface User {
  id: string;
  name: string;
  pin: string;
  accounts: Account[];
}
