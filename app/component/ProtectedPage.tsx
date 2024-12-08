// components/ProtectedPage.tsx
import { useEffect } from "react";
import { useRouter } from "next/router";
import useAuth from "../context/useAuth";
import { ROUTES } from "../util/imports";

const ProtectedPage = () => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push(ROUTES.LOGIN);
    }
  }, [user, loading, router]);

  if (loading) return <div>Loading...</div>;

  return <div>Protected Content</div>;
};

export default ProtectedPage;
