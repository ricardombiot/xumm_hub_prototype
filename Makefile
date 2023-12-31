start: frontend-build
	cd ./server && flask --app run run
	
start-ngrox:
	ngrok http --domain=lizard-massive-pheasant.ngrok-free.app 5000

frontend-build:
	cd frontend && npm run build

edgedb-ui:
	edgedb ui -I xapp_freelancers

edgedb-start:
	edgedb instance start -I xapp_freelancers

edgedb-gen:
	cd server/queries && edgedb-py --dsn edgedb://edgedb:1234@localhost:10701 --tls-security insecure

edgedb-migration-create:
	cd server && edgedb migration create --dsn edgedb://edgedb:1234@localhost:10701 --tls-security insecure

edgedb-migrate:
	cd server && edgedb migrate --dsn edgedb://edgedb:1234@localhost:10701 --tls-security insecure

edgedb-migrate-remote:
	cd server && edgedb migrate -I xapp_freelance_remote

git-push:
	git push -u origin main

start-demo:
	sh start-demo.sh

setup:
	sh setup_frontend.sh
	sh setup_py.sh