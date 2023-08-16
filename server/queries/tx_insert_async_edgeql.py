# AUTOGENERATED FROM 'queries/tx_insert.edgeql' WITH:
#     $ edgedb-py --dsn edgedb://edgedb:1234@localhost:10703 --tls-security insecure


from __future__ import annotations
import dataclasses
import edgedb
import uuid


class NoPydanticValidation:
    @classmethod
    def __get_validators__(cls):
        from pydantic.dataclasses import dataclass as pydantic_dataclass
        pydantic_dataclass(cls)
        cls.__pydantic_model__.__get_validators__ = lambda: []
        return []


@dataclasses.dataclass
class TxInsertResult(NoPydanticValidation):
    id: uuid.UUID


async def tx_insert(
    executor: edgedb.AsyncIOExecutor,
    *,
    quotation_id: uuid.UUID,
    tx_type: str,
    ledger_txid: str,
) -> TxInsertResult:
    return await executor.query_single(
        """\
        INSERT Tx {
            quotation := (SELECT Quotation FILTER .id = <std::uuid> $quotation_id),
            tx_type := <std::str> $tx_type,
            ledger_txid := <std::str> $ledger_txid
        }\
        """,
        quotation_id=quotation_id,
        tx_type=tx_type,
        ledger_txid=ledger_txid,
    )
