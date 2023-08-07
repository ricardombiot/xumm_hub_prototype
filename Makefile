

start: frontend-build
	cd ./server/web && flask --app run run


frontend-build:
	cd frontend && npm run build