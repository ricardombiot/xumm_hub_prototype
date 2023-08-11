# AUTOGENERATED FROM 'queries/quotation_select_for_escrow_destine.edgeql' WITH:
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
class QuotationSelectForEscrowDestineResult(NoPydanticValidation):
    id: uuid.UUID
    total_amount: float
    destine: QuotationSelectForEscrowDestineResultDestine
    job: QuotationSelectForEscrowDestineResultJob
    escrow_payload: typing.Optional[str]
    escrow_xumm_payload_uuid: typing.Optional[str]
    escrow_fullfilment: typing.Optional[str]
    escrow_sequence: typing.Optional[int]
    escrow_state: typing.Optional[StateQuotationEscrow]


@dataclasses.dataclass
class QuotationSelectForEscrowDestineResultDestine(NoPydanticValidation):
    id: uuid.UUID
    public_address: str


@dataclasses.dataclass
class QuotationSelectForEscrowDestineResultJob(NoPydanticValidation):
    id: uuid.UUID
    payer: QuotationSelectForEscrowDestineResultDestine


class StateQuotationEscrow(enum.Enum):
    NONE = "NONE"
    BUILED = "BUILED"
    WAITING_XUMM_SIGN = "WAITING_XUMM_SIGN"
    CHECKED = "CHECKED"
    FINISH = "FINISH"


async def quotation_select_for_escrow_destine(
    executor: edgedb.AsyncIOExecutor,
    *,
    destine_id: uuid.UUID,
    quotation_id: uuid.UUID,
) -> typing.Optional[QuotationSelectForEscrowDestineResult]:
    return await executor.query_single(
        """\
        select default::Quotation {
          total_amount,
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
          escrow_payload,
          escrow_xumm_payload_uuid,
          escrow_fullfilment,
          escrow_sequence,
          escrow_state
        } filter .destine.id = <std::uuid> $destine_id and
          .id = <std::uuid> $quotation_id\
        """,
        destine_id=destine_id,
        quotation_id=quotation_id,
    )
