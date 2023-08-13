# AUTOGENERATED FROM 'queries/quotation_save_escrow_after_checked_finished.edgeql' WITH:
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
class QuotationSaveEscrowAfterCheckedFinishedResult(NoPydanticValidation):
    id: uuid.UUID


async def quotation_save_escrow_after_checked_finished(
    executor: edgedb.AsyncIOExecutor,
    *,
    quotation_id: uuid.UUID,
    destine_id: uuid.UUID,
) -> typing.Optional[QuotationSaveEscrowAfterCheckedFinishedResult]:
    return await executor.query_single(
        """\
        update default::Quotation 
        filter .id = <std::uuid> $quotation_id and .destine.id = <std::uuid> $destine_id and
        .escrow_state = <default::StateQuotationEscrow> "WAITING_XUMM_SIGN_FINISH"
        set {
          escrow_state := <default::StateQuotationEscrow> "FINISHED",
          state := <default::StateQuotation> "CLOSED",
        }\
        """,
        quotation_id=quotation_id,
        destine_id=destine_id,
    )
