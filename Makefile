.PHONY: dev restart

dev:
	npm run dev

restart:
	pkill -f "vite" || true
	npm run dev
