

start: frontend-build
<<<<<<< HEAD
	cd ./server && flask --app run run

=======
	cd ./server && flask --app run run 
	
#cd ./server && python run.py
start-ngrox:
	ngrok http --domain=lizard-massive-pheasant.ngrok-free.app 5000
>>>>>>> 4d4c7b2d81d689e634abaf020c1ee44a03372461

frontend-build:
	cd frontend && npm run build


edgedb-ui:
	edgedb ui -I xapp_freelancers
<<<<<<< HEAD
=======
edgedb-start:
	edgedb instance start -I xapp_freelancers
>>>>>>> 4d4c7b2d81d689e634abaf020c1ee44a03372461

edgedb-gen:
	cd server/queries && edgedb-py --dsn edgedb://edgedb:1234@localhost:10701 --tls-security insecure

edgedb-migration-create:
	cd server && edgedb migration create --dsn edgedb://edgedb:1234@localhost:10701 --tls-security insecure

edgedb-migrate:
	cd server && edgedb migrate --dsn edgedb://edgedb:1234@localhost:10701 --tls-security insecure
<<<<<<< HEAD
=======

git-push:
	git push -u origin main
>>>>>>> 4d4c7b2d81d689e634abaf020c1ee44a03372461
