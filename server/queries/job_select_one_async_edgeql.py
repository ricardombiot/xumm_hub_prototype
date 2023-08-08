# AUTOGENERATED FROM 'queries/job_select_one.edgeql' WITH:
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
class JobSelectOneResult(NoPydanticValidation):
    id: uuid.UUID
    payer: JobSelectOneResultPayer
    title: str
    description: str
    budget_range: typing.Optional[str]


@dataclasses.dataclass
class JobSelectOneResultPayer(NoPydanticValidation):
    id: uuid.UUID


async def job_select_one(
    executor: edgedb.AsyncIOExecutor,
    *,
    job_id: uuid.UUID,
) -> typing.Optional[JobSelectOneResult]:
    return await executor.query_single(
        """\
        select default::Job {
          id,
          payer : {
            id
          },
          title,
          description,
          budget_range
        } filter .id = <std::uuid> $job_id\
        """,
        job_id=job_id,
    )
