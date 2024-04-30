import { EmailAddressResource } from "@clerk/types";

export type createUserData = {
  api_key: string;
  email: string | EmailAddressResource;
  session_id: string;
};
