# AUTOGENERATED FROM 'queries/job_insert.edgeql' WITH:
#     $ edgedb-py --dsn edgedb://edgedb:1234@localhost:10701 --tls-security insecure


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
class JobInsertResult(NoPydanticValidation):
    id: uuid.UUID


async def job_insert(
    executor: edgedb.AsyncIOExecutor,
    *,
    user_id: uuid.UUID,
    job_title: str,
    job_description: str,
) -> JobInsertResult:
    return await executor.query_single(
        """\
        INSERT Job {
            payer := (SELECT User FILTER .id = <std::uuid> $user_id),
            title := <std::str> $job_title,
            description := <std::str> $job_description,
        }\
        """,
        user_id=user_id,
        job_title=job_title,
        job_description=job_description,
    )
