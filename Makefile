deps-ts:
	bun add eslint prettier eslint-plugin-prettier eslint-config-prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser

test:
	deno test --allow-net
