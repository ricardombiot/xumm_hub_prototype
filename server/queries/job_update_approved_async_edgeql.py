# AUTOGENERATED FROM 'queries/job_update_approved.edgeql' WITH:
#     $ edgedb-py --dsn edgedb://edgedb:1234@localhost:10701 --tls-security insecure


from __future__ import annotations
import dataclasses
import edgedb
import typing
import uuid


class NoPydanticValidation:
    @classmethod
    def __get_validators__(cls):
        from pydantic.dataclasses import dataclass as pydantic_dataclass
        pydantic_dataclass(cls)
        cls.__pydantic_model__.__get_validators__ = lambda: []
        return []


@dataclasses.dataclass
class JobUpdateApprovedResult(NoPydanticValidation):
    id: uuid.UUID


async def job_update_approved(
    executor: edgedb.AsyncIOExecutor,
    *,
    job_id: uuid.UUID,
    payer_id: uuid.UUID,
    approved_quotation_id: uuid.UUID,
) -> typing.Optional[JobUpdateApprovedResult]:
    return await executor.query_single(
        """\
        UPDATE Job
        filter .id = <std::uuid> $job_id and
        .payer.id = <std::uuid> $payer_id 
        set {
            approved_quotation := (SELECT Quotation filter .id = <std::uuid> $approved_quotation_id )
        }\
        """,
        job_id=job_id,
        payer_id=payer_id,
        approved_quotation_id=approved_quotation_id,
    )
