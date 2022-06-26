import { api } from "../../../shared/api/api";
import { Endpoints } from "./constants/endpoints";
import { UserKeys } from "./constants/UserKeys";

export const requestToken = async () => {
  const {
    data: { request_token },
  } = await api.get(Endpoints.TOKEN_URL);
  localStorage.setItem(UserKeys.TOKEN, request_token);
  return request_token;
};

export const createSession = async (requestToken: string) => {
  const {
    data: { session_id },
  } = await api.post(Endpoints.NEW_SESSION, {
    request_token: requestToken,
  });
  localStorage.setItem(UserKeys.SESSION_ID, session_id);
  return session_id;
};

export const getAccount = async (sessionId: string) => {
  const { data } = await api.get(Endpoints.ACCOUNT, {
    params: {
      session_id: sessionId,
    },
  });
  return data;
};

export const deleteSession = async (sessionId: string) => {
  localStorage.removeItem(UserKeys.TOKEN);
  localStorage.removeItem(UserKeys.SESSION_ID);
  return await api.delete(Endpoints.SESSION, { data: { sessionId } });
};
