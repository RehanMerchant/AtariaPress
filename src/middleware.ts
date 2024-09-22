import {
  convexAuthNextjsMiddleware,
  createRouteMatcher,
  nextjsMiddlewareRedirect,
  isAuthenticatedNextjs
} from "@convex-dev/auth/nextjs/server";
 
const ispublicPage = createRouteMatcher(["/","/store","/blogs"]);
const isprotectedPage = createRouteMatcher(["/dashboard"]);
 const authpage = createRouteMatcher(["/auth"])
export default convexAuthNextjsMiddleware((request) => {
if(!ispublicPage(request) && !authpage && !isAuthenticatedNextjs() && isprotectedPage(request)){
  return nextjsMiddlewareRedirect(request, "/");
}
if( isAuthenticatedNextjs() && authpage(request)){
  return nextjsMiddlewareRedirect(request, '/')
}
if(!isAuthenticatedNextjs() && isprotectedPage(request)){
  return nextjsMiddlewareRedirect(request, "/auth");
}

});
 
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};