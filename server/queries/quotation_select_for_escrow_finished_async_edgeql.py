# AUTOGENERATED FROM 'queries/quotation_select_for_escrow_finished.edgeql' WITH:
#     $ edgedb-py --dsn edgedb://edgedb:1234@localhost:10700 --tls-security insecure


from __future__ import annotations
import dataclasses
import edgedb
import enum
import uuid


class NoPydanticValidation:
    @classmethod
    def __get_validators__(cls):
        from pydantic.dataclasses import dataclass as pydantic_dataclass
        pydantic_dataclass(cls)
        cls.__pydantic_model__.__get_validators__ = lambda: []
        return []


@dataclasses.dataclass
class QuotationSelectForEscrowFinishedResult(NoPydanticValidation):
    id: uuid.UUID
    total_amount: float
    destine: QuotationSelectForEscrowFinishedResultDestine
    job: QuotationSelectForEscrowFinishedResultJob
    escrow_state: StateQuotationEscrow | None
    escrow_finished_xumm_payload_uuid: str | None
    state: StateQuotation | None


@dataclasses.dataclass
class QuotationSelectForEscrowFinishedResultDestine(NoPydanticValidation):
    id: uuid.UUID
    public_address: str


@dataclasses.dataclass
class QuotationSelectForEscrowFinishedResultJob(NoPydanticValidation):
    id: uuid.UUID
    payer: QuotationSelectForEscrowFinishedResultJobPayer


@dataclasses.dataclass
class QuotationSelectForEscrowFinishedResultJobPayer(NoPydanticValidation):
    id: uuid.UUID
    public_address: str


class StateQuotation(enum.Enum):
    PUBLISHED = "PUBLISHED"
    APPROVED = "APPROVED"
    DONE = "DONE"
    CONFIRMED = "CONFIRMED"
    CLOSED = "CLOSED"


class StateQuotationEscrow(enum.Enum):
    NONE = "NONE"
    BUILED = "BUILED"
    WAITING_XUMM_SIGN = "WAITING_XUMM_SIGN"
    CHECKED = "CHECKED"
    WAITING_XUMM_SIGN_FINISH = "WAITING_XUMM_SIGN_FINISH"
    FINISHED = "FINISHED"


async def quotation_select_for_escrow_finished(
    executor: edgedb.AsyncIOExecutor,
    *,
    destine_id: uuid.UUID,
    quotation_id: uuid.UUID,
) -> QuotationSelectForEscrowFinishedResult | None:
    return await executor.query_single(
        """\
        select default::Quotation {
          total_amount,
          destine : {
            public_address
          },
          job : {
            payer : {
              id,
              public_address
            }
          },
          escrow_state,
          escrow_finished_xumm_payload_uuid,
          state
        } filter .destine.id = <std::uuid> $destine_id and
          .id = <std::uuid> $quotation_id\
        """,
        destine_id=destine_id,
        quotation_id=quotation_id,
    )
