import { Source } from "./source";
import { UserAccess } from "./user_access";
export interface User {
  user_name: string;
  user_email: string;
  user_phone: string;
  id: string;
  date_add: Date;
  date_upd: Date;
  sources: Source[];
  user_accesses: UserAccess[];
}
