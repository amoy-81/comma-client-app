import { UserRoles } from "../../../api/user/user.type";

export type UserRowProps = {
  id: number;
  avatar?: string;
  name: string;
  role : UserRoles
};
