# AUTOGENERATED FROM 'queries/direct_transfer_select.edgeql' WITH:
#     $ edgedb-py --dsn edgedb://edgedb:1234@localhost:10700 --tls-security insecure


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
class DirectTransferSelectResult(NoPydanticValidation):
    id: uuid.UUID
    quotation: DirectTransferSelectResultQuotation | None
    owner: DirectTransferSelectResultOwner | None
    payload: str | None
    is_checked: bool | None


@dataclasses.dataclass
class DirectTransferSelectResultOwner(NoPydanticValidation):
    id: uuid.UUID


@dataclasses.dataclass
class DirectTransferSelectResultQuotation(NoPydanticValidation):
    id: uuid.UUID


async def direct_transfer_select(
    executor: edgedb.AsyncIOExecutor,
    *,
    direct_transfer_id: uuid.UUID,
    owner_id: uuid.UUID,
) -> DirectTransferSelectResult | None:
    return await executor.query_single(
        """\
        SELECT DirectTransfer {
            quotation : {
                id
            },
            owner : {
                id
            },
            payload,
            is_checked
        } filter .id = <std::uuid> $direct_transfer_id and 
            .owner.id = <std::uuid> $owner_id\
        """,
        direct_transfer_id=direct_transfer_id,
        owner_id=owner_id,
    )
