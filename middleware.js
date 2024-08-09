export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/dashboard/profile",
    "/user/post",
    "/user/local-ads",
    "/user/multiple-city-ads",
  ],
};
