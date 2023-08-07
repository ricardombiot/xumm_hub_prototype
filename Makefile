

start: frontend-build
	cd ./server && flask --app run run


frontend-build:
	cd frontend && npm run build


edgedb-ui:
	edgedb ui -I xapp_freelancers

edgedb-gen:
	cd server/queries && edgedb-py --dsn edgedb://edgedb:1234@localhost:10701 --tls-security insecure

edgedb-migration-create:
	cd server && edgedb migration create --dsn edgedb://edgedb:1234@localhost:10701 --tls-security insecure

edgedb-migrate:
	cd server && edgedb migrate --dsn edgedb://edgedb:1234@localhost:10701 --tls-security insecure

git-push:
	git push -u origin main