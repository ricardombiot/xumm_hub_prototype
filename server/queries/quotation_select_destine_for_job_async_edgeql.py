# AUTOGENERATED FROM 'queries/quotation_select_destine_for_job.edgeql' WITH:
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
class QuotationSelectDestineForJobResult(NoPydanticValidation):
    id: uuid.UUID
    description: str
    total_amount: float
    destine: QuotationSelectDestineForJobResultDestine


@dataclasses.dataclass
class QuotationSelectDestineForJobResultDestine(NoPydanticValidation):
    id: uuid.UUID
    name: typing.Optional[str]


async def quotation_select_destine_for_job(
    executor: edgedb.AsyncIOExecutor,
    *,
    job_id: uuid.UUID,
    destine_id: uuid.UUID,
) -> typing.Optional[QuotationSelectDestineForJobResult]:
    return await executor.query_single(
        """\
        select default::Quotation {
          id,
          description,
          total_amount,
          destine: {
            name
          },
        } filter .job.id = <std::uuid> $job_id and
          .destine.id = <std::uuid> $destine_id 
          limit 1\
        """,
        job_id=job_id,
        destine_id=destine_id,
    )
