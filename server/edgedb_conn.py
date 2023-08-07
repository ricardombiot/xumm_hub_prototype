import edgedb
import os

EDGEDB_DATABASE = os.environ.get("edgedb_database")
EDGEDB_HOST = os.environ.get("edgedb_host")
EDGEDB_PORT = os.environ.get("edgedb_port")
EDGEDB_USER = os.environ.get("edgedb_user")
EDGEDB_PASSWORD = os.environ.get("edgedb_password")

def get_conn():
    return edgedb.create_async_client(
        database=EDGEDB_DATABASE,
        host=EDGEDB_HOST,
        port=EDGEDB_PORT,
        user=EDGEDB_USER,
        password=EDGEDB_PASSWORD,
        tls_security="insecure"
    )