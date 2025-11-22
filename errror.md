## Error Type
Build Error

## Error Message
Error evaluating Node.js code

## Build Output
./phd-trans/app/globals.css
Error evaluating Node.js code
CssSyntaxError: D:\Ngoding\WEB Poject\phd-trans\app\globals.css:22:3: Unknown word antialiased
    [at Input.error (turbopack:///[project]/phd-trans/node_modules/postcss/lib/input.js:135:16)]
    [at Parser.unknownWord (turbopack:///[project]/phd-trans/node_modules/postcss/lib/parser.js:595:22)]
    [at Parser.other (turbopack:///[project]/phd-trans/node_modules/postcss/lib/parser.js:437:12)]
    [at Parser.parse (turbopack:///[project]/phd-trans/node_modules/postcss/lib/parser.js:472:16)]
    [at parse (turbopack:///[project]/phd-trans/node_modules/postcss/lib/parse.js:11:12)]
    [at new LazyResult (turbopack:///[project]/phd-trans/node_modules/postcss/lib/lazy-result.js:165:16)]
    [at Processor.process (turbopack:///[project]/phd-trans/node_modules/postcss/lib/processor.js:53:14)]
    [at transform (turbopack:///[turbopack-node]/transforms/postcss.ts:70:51)]
    [at run (turbopack:///[turbopack-node]/ipc/evaluate.ts:92:29)]
    [at run (turbopack:///[turbopack-node]/ipc/evaluate.ts:115:11)]

Import trace:
  Client Component Browser:
    ./phd-trans/app/globals.css [Client Component Browser]
    ./phd-trans/app/layout.tsx [Server Component]

Next.js version: 16.0.3 (Turbopack)
