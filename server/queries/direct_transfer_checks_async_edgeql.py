# AUTOGENERATED FROM 'queries/direct_transfer_checks.edgeql' WITH:
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
class DirectTransferChecksResult(NoPydanticValidation):
    id: uuid.UUID


async def direct_transfer_checks(
    executor: edgedb.AsyncIOExecutor,
    *,
    direct_transfer_id: uuid.UUID,
    xumm_payload_uuid: str,
    is_checked: bool,
) -> DirectTransferChecksResult | None:
    return await executor.query_single(
        """\
        UPDATE DirectTransfer 
        filter .id = <std::uuid> $direct_transfer_id
        set {
            xumm_payload_uuid := <std::str> $xumm_payload_uuid,
            is_checked := <std::bool> $is_checked
        }\
        """,
        direct_transfer_id=direct_transfer_id,
        xumm_payload_uuid=xumm_payload_uuid,
        is_checked=is_checked,
    )
