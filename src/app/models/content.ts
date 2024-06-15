import { Source } from './source';
import { Access } from './access';

export interface Content {
  id: string;
  source_id: string;
  access_id: string;
  title: string;
  phrase: string;
  date_add: Date;
  date_upd: Date;
  status: number;
  source: Source;
  access: Access;
}
