import {
  convexAuthNextjsMiddleware,
  createRouteMatcher,
  nextjsMiddlewareRedirect,
  isAuthenticatedNextjs
} from "@convex-dev/auth/nextjs/server";
 
const ispublicPage = createRouteMatcher(["/","/authenticate"]);
 
export default convexAuthNextjsMiddleware((request) => {
if(!ispublicPage(request) && !isAuthenticatedNextjs()){
  return nextjsMiddlewareRedirect(request, "/");
}
});
 
export const config = {
  // The following matcher runs middleware on all routes
  // except static assets.
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};