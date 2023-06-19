import { cachedProfileResponse } from "@/axios/config";
import { toastComponent } from "@/components/toast/Toast";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

interface UserData {
  email: string;
  id: string;
  name: string;
  phone: string;
}

interface GetProfileResponse {
  result: UserData;
}
export const useProfileViewHelper = () => {
  const { data: session, status } = useSession();
  const [loadingProfile, setLoadingProfile] = useState(true);
  const [userData, setUserData] = useState<UserData | null>(null);

  const getProfileDetails = () => {
    if (session) {
      cachedProfileResponse
        .get<GetProfileResponse>(
          "https://iw-dev-eval-identity-webapp.azurewebsites.net/v1/identity/user/profile",
          {
            cache: {
              ttl: 1000 * 60 * 30, // 30min cache,
            },
            headers: {
              Authorization: session?.accessToken as string,
            },
          }
        )
        .then((res) => {
          if (res.status !== 200) {
          }

          setUserData(res.data.result);

          console.log(res);
        })
        .catch((err) => {
          console.log(err);
          toastComponent({
            msg: err.message,
            type: "error",
          });
        })
        .finally(() => {
          setLoadingProfile(false);
        });
    }
  };

  useEffect(() => {
    getProfileDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  return {
    loadingProfile,
    userData,
  };
};
