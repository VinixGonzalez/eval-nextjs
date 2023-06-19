import Axios from "axios";
import { setupCache } from "axios-cache-interceptor";

export const cachedProfileResponse = setupCache(Axios);
