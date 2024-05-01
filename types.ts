import { EmailAddressResource } from "@clerk/types";

export type createUserData = {
  api_key: string;
  email: string | EmailAddressResource;
  auth_id: string;
};

export type userDataResponse = {
  id: number;
  created_at: string;
  email: string;
  credits: number;
  api_key: string;
  username: string;
  auth_id: string;
};
