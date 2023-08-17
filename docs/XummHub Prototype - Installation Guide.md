# XummHub Prototype -  Installation Guide

**Clone prototype Project** 

```bash
git clone https://github.com/ricardombiot/xumm_hub_prototype
```

## Inferno Js (Frontend)

First of all, checks `node -v` that you use NodeJs version 18 (or high). if you havent nodejs or use an older version execute our script of installation `install_node18_17.sh`that will download & install node v18.17

<aside>
⚠️ **CAUTION: IF YOU HAVE A CURRENT ENVIRONMENT FOR OTHER NODEJS PROJECTS PLEASE DONT RUN IT DUE TO CAN BREAKS YOUR LOCAL CONFIG.**

</aside>

```bash
(venv) ubuntu@server:~/project/xumm_hub_prototype$ sh install_node18_17.sh
(venv) ubuntu@server:
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

Once you have nodejs, we can install all dependences and build frontend. 

```bash
ubuntu@server:~/project/xumm_hub_prototype$ cd frontend/
ubuntu@server:~/project/xumm_hub_prototype/frontend$ npm install

up to date, audited 641 packages in 2s

114 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
ubuntu@server:~/project/xumm_hub_prototype/frontend$ npm run build

> inferno-boilerplate@0.0.1 build
> webpack --mode=development --config webpack.conf.js

asset bundle.js 407 KiB [emitted] (name: main) 1 related asset
runtime modules 26.3 KiB 11 modules
modules by path ./src/ 142 KiB
  modules by path ./src/components/ 125 KiB 26 modules
  modules by path ./src/api/*.ts 8.96 KiB 6 modules
  modules by path ./src/*.js 5.01 KiB
    ./src/index.js 3.13 KiB [built] [code generated]
    + 3 modules
  modules by path ./src/models/*.ts 2.91 KiB
    ./src/models/quotation.ts 872 bytes [built] [code generated]
    + 3 modules
modules by path ./node_modules/ 152 KiB
  modules by path ./node_modules/inferno/ 76.8 KiB
    ./node_modules/inferno/index.esm.js 197 bytes [built] [code generated]
    ./node_modules/inferno/dist/index.esm.js 76.6 KiB [built] [code generated]
  + 7 modules
webpack 5.88.2 compiled successfully in 7691 ms
```

## Python + Flask (Backend)

Setup: Follow instructions or run `make setup`

```bash
#Install python3 
ubuntu@server:~/project/xumm_hub_prototype$ sudo apt update
ubuntu@server:~/project/xumm_hub_prototype$ sudo apt install python3
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
python3 is already the newest version (3.10.6-1~22.04).
python3 set to manually installed.
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
ubuntu@server:~/project/xumm_hub_prototype$ sudo apt install python3-pip
.........

# Create virtual env.
ubuntu@server:~/project/xumm_hub_prototype$ sudo apt install python3.10-venv
ubuntu@server:~/project/xumm_hub_prototype$ python3 -m venv ./venv
ubuntu@ip-172-26-6-69:~/project/xumm_hub_prototype$ source ./venv/bin/activate

# Install deps
(venv) ubuntu@server:~/project/xumm_hub_prototype$ pip3 install -r requirements.txt 
Collecting asgiref==3.7.2
  Downloading asgiref-3.7.2-py3-none-any.whl (24 kB)
Collecting base58==2.1.0
  Downloading base58-2.1.0-py3-none-any.whl (5.6 kB)
Collecting blinker==1.6.2
  Downloading blink.........
...............................................................
...............................................................

```

## EdgeDB (Database)

Following instructions:

[https://www.edgedb.com/install](https://www.edgedb.com/install)

We install edgedb with this command:

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.edgedb.com | sh

source "/home/ubuntu/.config/edgedb/env"
cd server
edgedb project init
```

After, we go to `xumm_hub_prototype/server` directory and execute that `edgedb project init` 

```bash
(venv) ubuntu@server:~/project/xumm_hub_prototype$ source "/home/ubuntu/.config/edgedb/env"
(venv) ubuntu@server:~/project/xumm_hub_prototype$ cd server/
(venv) ubuntu@server:~/project/xumm_hub_prototype/server$ edgedb project init
Found `edgedb.toml` in /home/ubuntu/demo/xumm_hub_prototype/server
Initializing project...
Specify the name of EdgeDB instance to use with this project [default: server]: 
> xapp_freelancers
Checking EdgeDB versions...
┌────────────────────────┬─────────────────────────────────────────────────────────┐
│ Project directory      │ /home/ubuntu/demo/xumm_hub_prototype/server             │
│ Project config         │ /home/ubuntu/demo/xumm_hub_prototype/server/edgedb.toml │
│ Schema dir (non-empty) │ /home/ubuntu/demo/xumm_hub_prototype/server/dbschema    │
│ Installation method    │ portable package                                        │
│ Version                │ 3.2+bb17a05                                             │
│ Instance name          │ xapp_freelancers                                        │
└────────────────────────┴─────────────────────────────────────────────────────────┘
Downloading package...
00:00:00 [====================] 39.00 MiB/39.00 MiB 47.45 MiB/s | ETA: 0s                                                      
Successfully installed 3.2+bb17a05
Initializing EdgeDB instance...
[systemctl] Created symlink /home/ubuntu/.config/systemd/user/default.target.wants/edgedb-server@xapp_freelancers.socket → /home/ubuntu/.config/systemd/user/edgedb-server@xapp_freelancers.socket.
[systemctl] Created symlink /home/ubuntu/.config/systemd/user/default.target.wants/edgedb-server@xapp_freelancers.service → /home/ubuntu/.config/systemd/user/edgedb-server@xapp_freelancers.service.
Applying migrations...
Applied m1srazkyehq2gtrkxzvikh6enwnadvdihthprvhtbmhqtfjkdqjmqa (00001.edgeql)
Applied m1oihccnks2uakbk2zdhgtewxhnztbtvjrhra3fkg2fssjega6u5fq (00002.edgeql)
Applied m12d6kuxgbn7n7bhaoxa3qneke3mxrck6cleqfywabr4vi7qveggda (00003.edgeql)
Applied m17vrla3nv7cmd435z6pn3hs3i3p5mcfosbfqipbsopw4ma4ydg5lq (00004.edgeql)
Applied m1ahpys7rcbgsbqzileujzv4yhcby4d3vrx5cjyuln2eb2fiidhyaq (00005.edgeql)
Applied m15nye7sculwnf7fqsfl4q2rgajjfn3ymfacsutqds5tbiezjr6wna (00006.edgeql)
Applied m1xahdxr4k4tuhzgwylawaxv2zq4c7hjurafoojhz34ghkyvuqluja (00007.edgeql)
Applied m13hcz27lwztdm7iyuby5peeikfc5j2uzvujedegdie6ooqkj3a3rq (00008.edgeql)
Applied m1f4zuefjfwmoaep5edbi3fwoczm5ecf4ojhxwbu2dox34jt5xctba (00009.edgeql)
Applied m1urmhcamp5q4coucrrdoiyvrk2kntpju6e3ocq74x5oqpjoep6uxq (00010.edgeql)
Applied m1b5ehvq6cwk3htogj7e5uexq4xmqdqefd747akew73zvc3xd7oyea (00011.edgeql)
Applied m1a2dqfdlxeojwcxcng3gwgtxyhzoxrcw23yytfwivs7xqeuo3jatq (00012.edgeql)
Applied m1vnwl3doma3cjkqpp6lva56omznsw3nalnyokrsn5uyf2f6gvvm2a (00013.edgeql)
Applied m1lia76iyv5lne75xbmuzdrilb3i74m5fmnef72c4bqmfegg3x3ofq (00014.edgeql)
Applied m1obli4lmkmap5p6cs4ubgfeauxx2htjyjw2bihfk3kvfxpxhloiba (00015.edgeql)
Applied m1y6a4jsdtoftmchk5xrgkulh2dqfydob4wmrtjjorgpz2eotsyxvq (00016.edgeql)
Applied m1vzosfvfjonz3fcqbxnawn466smzhvaxqe62h7b5dcws5vqsi4a4q (00017.edgeql)
Applied m1yg7yworbyfjmi75nerwyu42nracicacivyg6mro67mcktge3i7zq (00018.edgeql)
Applied m1t3wrr6h4ggi5nc2csiwvnn7fbdmz6dei5wgqxja7dp4c5asi7yuq (00019.edgeql)
Applied m1plrbhbl3ms3r7sg2r5xwlnbvhkfy7lifj5ctkr4alyz6tqqhe3na (00020.edgeql)
Applied m17r75ilri6256dtyzjcf557wa2hmded2obr6err5ql5vffgd2vk5a (00021.edgeql)
Applied m1mbeii3nv6i3rbkapt5hsegcbmdvdjtuvgurvcoenugczc3r3vuxq (00022.edgeql)
Applied m1kb3fybkbwrtruz76ctpbkrrn7pekhk47c7yboapm5j4jiuf4feoq (00023.edgeql)
Project initialized.
To connect to xapp_freelancers, run `edgedb`
```

After this step, your edgedb local instance is running with our prototype schema¡¡ congratulations. 

`server/dbschema/default.esdl`

```sql
module default {

  type User {
    required public_address -> str;
    email -> str;
    name -> str;
    last_name -> str;
    full_address -> str;
    city -> str;
    postal_code -> str;
    country -> str;
    phone -> str;
    bio -> str;
  }

  type Job {
    required payer -> User;

    required title -> str;
    required description -> str;
    budget_range -> str;
    categories -> json;

    approved_quotation -> Quotation;

    link quotations := .<job[is Quotation];

    created_at: datetime {
      readonly := true;
      default := datetime_of_statement();
    }
  }

  scalar type StateQuotationEscrow extending enum<NONE,BUILED,WAITING_XUMM_SIGN,CHECKED,WAITING_XUMM_SIGN_FINISH,FINISHED>;
  scalar type StateQuotation extending enum<PUBLISHED, APPROVED, DONE, CONFIRMED, CLOSED>;
  
  type Quotation {
    required job -> Job;
    required description -> str;
    required total_amount -> float64;
    required destine -> User;

    delta_days -> int32 {
      default := 7
    }

    escrow_payload -> str;
    escrow_fullfilment -> str;

    escrow_xumm_payload_uuid -> str;
    escrow_txid -> str;
    escrow_sequence -> int64;

    escrow_finished_xumm_payload_uuid -> str;

    escrow_state -> default::StateQuotationEscrow {
      default := <default::StateQuotationEscrow> "NONE";
    }

    state -> default::StateQuotation {
      default := <default::StateQuotation> "PUBLISHED";
    }

    escrow_checked_at: datetime;

    created_at: datetime {
      readonly := true;
      default := datetime_of_statement();
    }

    link txs := .<quotation[is Tx];
    link direct_transfers := .<quotation[is DirectTransfer];
  }

  type Tx {
    required quotation: Quotation;
    required tx_type: str;
    required ledger_txid: str;

    created_at: datetime {
      readonly := true;
      default := datetime_of_statement();
    }
  }

  type DirectTransfer {

    quotation -> Quotation;
    payload -> str;
    xumm_payload_uuid -> str;
    owner -> User;
    is_checked -> bool {
      default := false
    }

    created_at: datetime {
      readonly := true;
      default := datetime_of_statement();
    }
  }

}
```

*Recommend: Take a minutes see and follow the schema, in the following image you can see the edgedb ui diagram.*

![Untitled](XummHub%20Prototype%20-%20Installation%20Guide%2031adb5d1fb9e4a829dd132915a46d2d0/Untitled.png)

You can open the edgedb ui interface with:

```sql
# START INSTANCE (recommended)
edgedb instance start -I xapp_freelancers
# START WEB EDGEDB-UI
edgedb ui -I xapp_freelancers
...
http://localhost:10701/ui?authToken=edbt_eyJ0eXAiOiJyJlZGd......F8YN4Cop-OtMqA
```

![Untitled](XummHub%20Prototype%20-%20Installation%20Guide%2031adb5d1fb9e4a829dd132915a46d2d0/Untitled%201.png)

But we didnt migrate the scheme therefore we should continue. First of all, gives an a password to edgedb user *(Note: if you change the following super secret, you would need update makefile in coherence).*

```sql
ubuntu@server:~/project/xumm_hub_prototype$ edgedb -I xapp_freelancers
EdgeDB 3.2+bb17a05 (repl 3.4.0+160d07d)
Type \help for help, \quit to quit.
edgedb> ALTER ROLE edgedb {
.......     SET password := "1234";
....... };
OK: ALTER ROLE
edgedb> \q
```

### **Super easy update schema edgedb cycle:**

Now, I show you a example of migration… 

1. EDIT YOUR SCHEMA `dbschema/default.esdl`
2. CREATES A MIGRATION with `edgedb migration create`

```bash
ubuntu@server:~/project/xumm_hub_prototype$ cd server && edgedb migration create --dsn edgedb://edgedb:1234@localhost:10701 --tls-security insecure
Created /home/ubuntu/project/xumm_hub_prototype/server/dbschema/migrations/00001.edgeql, id: m1aysfznnxv5wdy432uzkb2rsagaruzlfvbavnnfkj3pi23p2bfyna
```

<aside>
👉 *Note: As we started init project, but if you change the schema edgedb detects automatically and ask you intrustructions for build a new migration that will upgrade the schema in local o remote instance.*

</aside>

1. APPLY MIGRATE OVER YOUR INSTANCE with `edgedb migrate`
    
    ```bash
    ubuntu@server:~/project/xumm_hub_prototype$ cd server && edgedb migrate --dsn edgedb://edgedb:1234@localhost:10701 --tls-security insecure
    Applied m1aysfznnxv5wdy432uzkb2rsagaruzlfvbavnnfkj3pi23p2bfyna (00001.edgeql)
    ```
    

<aside>
👌 **Thats all!** 🎉🥳**, now you can repeat cycle again 1. edit again schema, 2. create migration, 3. apply migration… 1, 2,3.. ,1,2,3… indefinitely. EdgeDB helps us  a lot (save us time & money) on the database maintenance** 😃

</aside>

> For example: removing some fields of user entity and see how edgedb detects that change.
> 
> 
> ```bash
> type User {
>     required public_address -> str;
>     email -> str;
>     name -> str;
> 		... remove the rest
>   }
> ```
> 
> ```bash
> ubuntu@server:~/project/xumm_hub_prototype$ make edgedb-migration-create 
> cd server && edgedb migration create --dsn edgedb://edgedb:1234@localhost:10701 --tls-security insecure
> did you alter object type 'default::User'? [y,n,l,c,b,s,q,?]
> > y
> Created /home/ubuntu/project/xumm_hub_prototype/server/dbschema/migrations/00002.edgeql, id: m1e6my4bmhiz2hp5gsejegwhbcvo5z2yifpgvoxhsu23qt7ab4rzua
> ubuntu@server:~/project/xumm_hub_prototype$ make edgedb-migrate
> cd server && edgedb migrate --dsn edgedb://edgedb:1234@localhost:10701 --tls-security insecure
> Applied m1e6my4bmhiz2hp5gsejegwhbcvo5z2yifpgvoxhsu23qt7ab4rzua (00002.edgeql)
> ```
> 
> <aside>
> 👉 On the Makefile we have multiples actions for manage edgedb easily.
> 
> </aside>
> 

### Syntax & code-generation Queries

We have all the queries on the directory `server/queries`each one of them, have a .edgeql and a .py file associate. It have been crucial of this prototype the easy way of manage DB and its queries. For example, while we are deploy demo see that we would like show delta_days (Deadline/Escrow expiration days) therefore we look for the query associate with endpoint and just we need include it and run `make edgedb-gen` this command will generate the python code associate by us :)

![Untitled](XummHub%20Prototype%20-%20Installation%20Guide%2031adb5d1fb9e4a829dd132915a46d2d0/Untitled%202.png)

As you can see the EdgeDB syntax is similar GraphQL: [https://www.edgedb.com/vs/graphql](https://www.edgedb.com/vs/graphql)

```graphql
select default::Quotation {
	...
	job : { # Quotation -> job 
		id,
		payer : { # Quotation -> job (Job) -> payer (User)
			id,
			name
		},
		approved_quotation
	},
	...
}
```

<aside>
📎 **The EdgeQL query language:** a full redesign of SQL that has been sorely needed for decades. This includes support for GraphQL-style selection sets, easily nestable subqueries (including inserts and updates), a new `link` concept that abstracts away JOINs and foreign keys, edge properties, and a typesafe NULL-free type system grounded in set theory. ([https://www.edgedb.com/](https://www.edgedb.com/))

</aside>

An short conclusion about EdgeDB: 

> it is hard imagine an easily way of manage databases migrations & queries.
> 

### Edgedb + postgress

On development env, sometimes edgedb instances sleep then we just need run: `edgedb instance start`

```bash
Error:
...
...
edgedb.errors.ClientConnectionFailedTemporarilyError: [Errno 111] Connect call failed ('127.0.0.1', 10070)
After 271 attempts in 30.1 sec
Is the server running on host 'localhost' and accepting
TCP/IP connections on port 10070?
...

Solution: edgedb instance start -I xapp_freelancers
```

However, on demo server, we need that edgedb will be always running therefore:

1. Server postgreSQL
    
    ![Untitled](XummHub%20Prototype%20-%20Installation%20Guide%2031adb5d1fb9e4a829dd132915a46d2d0/Untitled%203.png)
    
2. test connection
    
    ```docker
    ubuntu@server:~/demo/xumm_hub_prototype/docs/demo/edgedb_server$ psql postgres://pqedgedb:<PASSWORD>@<ENDPOINT>:5432/dbmaster
    psql (15.4 (Ubuntu 15.4-1.pgdg22.04+1), server 15.3)
    SSL connection (protocol: TLSv1.2, cipher: ECDHE-RSA-AES256-GCM-SHA384, compression: off)
    Type "help" for help.
    
    dbmaster=> \q
    ```
    
3. docker compose 
    
    ```docker
    version: '3'
    services:
      edgedb:
        image: edgedb/edgedb:3.2
        environment:
          - EDGEDB_DOCKER_BOOTSTRAP_TIMEOUT_SEC=1000000
          - EDGEDB_SERVER_ADMIN_UI=enabled
          - EDGEDB_SERVER_TLS_CERT_MODE=generate_self_signed
          - EDGEDB_SERVER_PASSWORD=<PASSWORD>
          - EDGEDB_SERVER_BACKEND_DSN=postgres://<USER>:<PASSWORD>@<ENDPOINT>:5432/dbmaster
        ports:
          - 5656:5656
        volumes:
          - /home/ubuntu/edgedb_data:/var/lib/edgedb/data
    ```
    
4. add link with remote instance
    
    ```docker
    ubuntu@server:~/demo/xumm_hub_prototype/docs/demo/edgedb_server$ edgedb instance link
    Specify the host of the server [default: localhost]: 
    > localhost
    Specify the port of the server [default: 5656]: 
    > 5656
    Specify the database user [default: edgedb]: 
    > edgedb
    Specify the database name [default: edgedb]: 
    > edgedb
    Unknown server certificate: SHA1:7fcbf17b9f0556fefbdd3b35a997bfceaaaa3379. Trust? [y/N]
    > y
    Password for 'edgedb': 
    Specify a new instance name for the remote server [default: localhost]: 
    > xapp_freelance_remote
    Successfully linked to remote instance. To connect run:
      edgedb -I xapp_freelance_remote
    ubuntu@ip-172-26-13-198:~/demo/xumm_hub_prototype/docs/demo/edgedb_server$ edgedb instance list
    ┌────────┬───────────────────────┬─────────────────┬─────────────┬────────┐
    │ Kind   │ Name                  │ Location        │ Version     │ Status │
    ├────────┼───────────────────────┼─────────────────┼─────────────┼────────┤
    │ local  │ xapp_freelancers      │ localhost:10700 │ 3.2+bb17a05 │ ready  │
    │ remote │ xapp_freelance_remote │ localhost:5656  │ 3.2+99ce519 │ up     │
    └────────┴───────────────────────┴─────────────────┴─────────────┴────────┘
    ubuntu@ip-172-26-13-198:~/demo/xumm_hub_prototype/docs/demo/edgedb_server$
    ```
    
5. Migration
    
    
    Go to ./server folder and execute migration.
    
    ```bash
    ubuntu@server:~/demo/xumm_hub_prototype/server$ edgedb migrate -I xapp_freelance_remote
    Applied m1srazkyehq2gtrkxzvikh6enwnadvdihthprvhtbmhqtfjkdqjmqa (00001.edgeql)
    Applied m1oihccnks2uakbk2zdhgtewxhnztbtvjrhra3fkg2fssjega6u5fq (00002.edgeql)
    Applied m12d6kuxgbn7n7bhaoxa3qneke3mxrck6cleqfywabr4vi7qveggda (00003.edgeql)
    Applied m17vrla3nv7cmd435z6pn3hs3i3p5mcfosbfqipbsopw4ma4ydg5lq (00004.edgeql)
    Applied m1ahpys7rcbgsbqzileujzv4yhcby4d3vrx5cjyuln2eb2fiidhyaq (00005.edgeql)
    Applied m15nye7sculwnf7fqsfl4q2rgajjfn3ymfacsutqds5tbiezjr6wna (00006.edgeql)
    Applied m1xahdxr4k4tuhzgwylawaxv2zq4c7hjurafoojhz34ghkyvuqluja (00007.edgeql)
    Applied m13hcz27lwztdm7iyuby5peeikfc5j2uzvujedegdie6ooqkj3a3rq (00008.edgeql)
    Applied m1f4zuefjfwmoaep5edbi3fwoczm5ecf4ojhxwbu2dox34jt5xctba (00009.edgeql)
    Applied m1urmhcamp5q4coucrrdoiyvrk2kntpju6e3ocq74x5oqpjoep6uxq (00010.edgeql)
    Applied m1b5ehvq6cwk3htogj7e5uexq4xmqdqefd747akew73zvc3xd7oyea (00011.edgeql)
    Applied m1a2dqfdlxeojwcxcng3gwgtxyhzoxrcw23yytfwivs7xqeuo3jatq (00012.edgeql)
    Applied m1vnwl3doma3cjkqpp6lva56omznsw3nalnyokrsn5uyf2f6gvvm2a (00013.edgeql)
    Applied m1lia76iyv5lne75xbmuzdrilb3i74m5fmnef72c4bqmfegg3x3ofq (00014.edgeql)
    Applied m1obli4lmkmap5p6cs4ubgfeauxx2htjyjw2bihfk3kvfxpxhloiba (00015.edgeql)
    Applied m1y6a4jsdtoftmchk5xrgkulh2dqfydob4wmrtjjorgpz2eotsyxvq (00016.edgeql)
    Applied m1vzosfvfjonz3fcqbxnawn466smzhvaxqe62h7b5dcws5vqsi4a4q (00017.edgeql)
    Applied m1yg7yworbyfjmi75nerwyu42nracicacivyg6mro67mcktge3i7zq (00018.edgeql)
    Applied m1t3wrr6h4ggi5nc2csiwvnn7fbdmz6dei5wgqxja7dp4c5asi7yuq (00019.edgeql)
    Applied m1plrbhbl3ms3r7sg2r5xwlnbvhkfy7lifj5ctkr4alyz6tqqhe3na (00020.edgeql)
    Applied m17r75ilri6256dtyzjcf557wa2hmded2obr6err5ql5vffgd2vk5a (00021.edgeql)
    Applied m1mbeii3nv6i3rbkapt5hsegcbmdvdjtuvgurvcoenugczc3r3vuxq (00022.edgeql)
    Applied m1kb3fybkbwrtruz76ctpbkrrn7pekhk47c7yboapm5j4jiuf4feoq (00023.edgeql)
    ```
    
6. Edit .env
    
    ```bash
    edgedb_database="edgedb" 
    edgedb_host="localhost"
    edgedb_port=5656
    edgedb_user="edgedb"
    edgedb_password=<HERE_PASSWORD_WRITED_ON_DOCKER_COMPOSE_FILE>
    ```
    

## **Xumm Integration**

Our prototype is integrate with Xumm then we need register our application using xumm developer console ([https://apps.xumm.dev/](https://apps.xumm.dev/)). 

<aside>
📎 if is your first Xumm xApp, see our micro tutorial before.

[Micro Tutorial - Xumm Dev. environment ](https://www.notion.so/Micro-Tutorial-Xumm-Dev-environment-58806f318403490984700463b8e8d35e?pvs=21)

</aside>

![Untitled](XummHub%20Prototype%20-%20Installation%20Guide%2031adb5d1fb9e4a829dd132915a46d2d0/Untitled%204.png)

![Untitled](XummHub%20Prototype%20-%20Installation%20Guide%2031adb5d1fb9e4a829dd132915a46d2d0/Untitled%205.png)

Xumm will assign to your app a pair of API keys that we will use on cliente side (using Xumm library) and on backend using the Xumm API.

**Before continue, it is important add a the webhook endpoint and redirect URI.**

![Untitled](XummHub%20Prototype%20-%20Installation%20Guide%2031adb5d1fb9e4a829dd132915a46d2d0/Untitled%206.png)

## Environment variables

```bash
# EdgedbServer DB - take info using: edgedb instance list
edgedb_database="edgedb" 
edgedb_host="localhost"
edgedb_port=<PORT>
edgedb_user="edgedb"
edgedb_password="1234"

# Limit login to "TESTNET" user (this isnt production project!)
USERS_NETWORK="TESTNET"

# Our JWT Secret
JWT_SECRET="NZtaXYVqBt....v59y#B*PwQ"
USERS_JWT_LIFETIME_HOURS=168
# Key for encript escrows conditions
SECRET_FULFILLMENT="zhAxsoZeWgZM.....L_WNYINrwWm8="

# XUMM :)
API_XUMM_KEY="...."
API_XUMM_SECRET="....."
```

and sorry you should, write on metal 😞, your API_XUMM_KEY on `server/web/static/js/xumm_sign.js` 

![Untitled](XummHub%20Prototype%20-%20Installation%20Guide%2031adb5d1fb9e4a829dd132915a46d2d0/Untitled%207.png)

Also you should check and update the edgedb 

```bash
(venv) ubuntu@server:~/project/xumm_hub_prototype$ edgedb instance list
┌───────┬──────────────────┬─────────────────┬─────────────┬─────────┐
│ Kind  │ Name             │ Location        │ Version     │ Status  │
├───────┼──────────────────┼─────────────────┼─────────────┼─────────┤
│ local │ xapp_freelancers │ localhost:10700 │ 3.2+bb17a05 │ running │
└───────┴──────────────────┴─────────────────┴─────────────┴─────────┘
```

## Setup:

if you are on local and use ngrox edit Makefile with your conf and before start server `make start-ngrox`

Run Flask web server (compiling frontend)  

`make start`

PERFECT !!

![Untitled](XummHub%20Prototype%20-%20Installation%20Guide%2031adb5d1fb9e4a829dd132915a46d2d0/Untitled%208.png)

***Note: As you can see, theme & template have many mockup texts 😄😃!***