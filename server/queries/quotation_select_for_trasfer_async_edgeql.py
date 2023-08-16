# AUTOGENERATED FROM 'queries/quotation_select_for_trasfer.edgeql' WITH:
#     $ edgedb-py --dsn edgedb://edgedb:1234@localhost:10701 --tls-security insecure


from __future__ import annotations
import dataclasses
import edgedb
import enum
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
class QuotationSelectForTrasferResult(NoPydanticValidation):
    id: uuid.UUID
    destine: QuotationSelectForTrasferResultDestine
    job: QuotationSelectForTrasferResultJob
    state: typing.Optional[StateQuotation]


@dataclasses.dataclass
class QuotationSelectForTrasferResultDestine(NoPydanticValidation):
    id: uuid.UUID
    public_address: str


@dataclasses.dataclass
class QuotationSelectForTrasferResultJob(NoPydanticValidation):
    id: uuid.UUID
    payer: QuotationSelectForTrasferResultDestine


class StateQuotation(enum.Enum):
    PUBLISHED = "PUBLISHED"
    APPROVED = "APPROVED"
    DONE = "DONE"
    CONFIRMED = "CONFIRMED"
    CLOSED = "CLOSED"


async def quotation_select_for_trasfer(
    executor: edgedb.AsyncIOExecutor,
    *,
    quotation_id: uuid.UUID,
) -> typing.Optional[QuotationSelectForTrasferResult]:
    return await executor.query_single(
        """\
        select default::Quotation {
          destine : {
            id,
            public_address
          },
          job : {
            payer : {
              id,
              public_address
            }
          },
          state
        } filter .id = <std::uuid> $quotation_id and .state != <default::StateQuotation> "PUBLISHED"\
        """,
        quotation_id=quotation_id,
    )