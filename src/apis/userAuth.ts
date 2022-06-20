import { api } from "../shared/api";

export const requestToken = async () => {
  const {
    data: { request_token },
  } = await api.get("/authentication/token/new");
  localStorage.setItem("request_token", request_token);
  return request_token;
};

export const createSession = async (requestToken: string) => {
  const {
    data: { session_id },
  } = await api.post("/authentication/session/new", {
    request_token: requestToken,
  });
  localStorage.setItem("session_id", session_id);
  return session_id;
};

export const getAccount = async (sessionId: string) => {
  const { data } = await api.get("/account", {
    params: {
      session_id: sessionId,
    },
  });
  return data;
};

export const deleteSession = async (sessionId:string) => {
  localStorage.removeItem("request_token");
  localStorage.removeItem("session_id");
  return await api.delete("/authentication/session", { data: { sessionId } });
};
