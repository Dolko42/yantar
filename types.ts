import { EmailAddressResource } from "@clerk/types";

export type userData = {
  api_key: string;
  email: string | EmailAddressResource;
  session_id: string;
};
