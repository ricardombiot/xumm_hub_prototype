# AUTOGENERATED FROM 'queries/quotation_select_by_id.edgeql' WITH:
#     $ edgedb-py --dsn edgedb://edgedb:1234@localhost:10701 --tls-security insecure


from __future__ import annotations
import dataclasses
import datetime
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
class QuotationSelectByIdResult(NoPydanticValidation):
    id: uuid.UUID
    description: str
    total_amount: float
    destine: QuotationSelectByIdResultDestine
    job: QuotationSelectByIdResultJob
    escrow_state: typing.Optional[StateQuotationEscrow]
    escrow_checked_at: typing.Optional[datetime.datetime]
    state: typing.Optional[StateQuotation]
    txs: list[QuotationSelectByIdResultTxsItem]


@dataclasses.dataclass
class QuotationSelectByIdResultDestine(NoPydanticValidation):
    id: uuid.UUID
    name: typing.Optional[str]


@dataclasses.dataclass
class QuotationSelectByIdResultJob(NoPydanticValidation):
    id: uuid.UUID
    payer: QuotationSelectByIdResultDestine
    approved_quotation: typing.Optional[QuotationSelectByIdResultJobApprovedQuotation]


@dataclasses.dataclass
class QuotationSelectByIdResultJobApprovedQuotation(NoPydanticValidation):
    id: uuid.UUID


@dataclasses.dataclass
class QuotationSelectByIdResultTxsItem(NoPydanticValidation):
    id: uuid.UUID
    tx_type: str
    ledger_txid: str
    created_at: typing.Optional[datetime.datetime]


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


async def quotation_select_by_id(
    executor: edgedb.AsyncIOExecutor,
    *,
    quotation_id: uuid.UUID,
) -> typing.Optional[QuotationSelectByIdResult]:
    return await executor.query_single(
        """\
        select default::Quotation {
          id,
          description,
          total_amount,
          destine: {
            id,
            name
          },
          job : {
            id,
            payer : {
              id,
              name
            },
            approved_quotation
          },
          escrow_state,
          escrow_checked_at,
          state,
          txs : {
            tx_type,
            ledger_txid,
            created_at
          }
        } filter .id = <std::uuid> $quotation_id\
        """,
        quotation_id=quotation_id,
    )