import { Source } from "./source";
import { UserAccess } from "./user_access";
export interface User {
  user_name: string;
  user_email: string;
  user_phone: string;
  id: string;
  date_add: string;
  date_upd: string;
  sources: Source[];
  user_accesses: UserAccess[];
}
