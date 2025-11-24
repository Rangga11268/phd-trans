## Error Type
Runtime Error

## Error Message
Attempted to call createMotionComponent() from the server but createMotionComponent is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.


    at Destinations (components\Destinations.tsx:62:19)
    at resolveErrorDev (file://D:/Ngoding/WEB Poject/phd-trans/.next/dev/static/chunks/4494f_next_dist_compiled_react-server-dom-turbopack_563751a4._.js:1862:148)
    at processFullStringRow (file://D:/Ngoding/WEB Poject/phd-trans/.next/dev/static/chunks/4494f_next_dist_compiled_react-server-dom-turbopack_563751a4._.js:2370:29)
    at processFullBinaryRow (file://D:/Ngoding/WEB Poject/phd-trans/.next/dev/static/chunks/4494f_next_dist_compiled_react-server-dom-turbopack_563751a4._.js:2329:9)
    at processBinaryChunk (file://D:/Ngoding/WEB Poject/phd-trans/.next/dev/static/chunks/4494f_next_dist_compiled_react-server-dom-turbopack_563751a4._.js:2439:98)
    at progress (file://D:/Ngoding/WEB Poject/phd-trans/.next/dev/static/chunks/4494f_next_dist_compiled_react-server-dom-turbopack_563751a4._.js:2608:13)

## Code Frame
  60 |       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
  61 |         <div className="text-center mb-8 sm:mb-12 lg:mb-16">
> 62 |           <motion.div
     |                   ^
  63 |             initial={{ opacity: 0, y: 20 }}
  64 |             whileInView={{ opacity: 1, y: 0 }}
  65 |             viewport={{ once: true }}

Next.js version: 16.0.3 (Turbopack)
