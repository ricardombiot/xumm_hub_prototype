# AUTOGENERATED FROM 'queries/quotation_save_escrow.edgeql' WITH:
#     $ edgedb-py --dsn edgedb://edgedb:1234@localhost:10700 --tls-security insecure


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
class QuotationSaveEscrowResult(NoPydanticValidation):
    id: uuid.UUID


async def quotation_save_escrow(
    executor: edgedb.AsyncIOExecutor,
    *,
    quotation_id: uuid.UUID,
    payer_id: uuid.UUID,
    escrow_payload: str,
    escrow_fullfilment: str,
) -> QuotationSaveEscrowResult | None:
    return await executor.query_single(
        """\
        update default::Quotation 
        filter .id = <std::uuid> $quotation_id and .job.payer.id = <std::uuid> $payer_id 
        set {
          escrow_payload := <std::str> $escrow_payload,
          escrow_fullfilment := <std::str> $escrow_fullfilment,
          escrow_state := <default::StateQuotationEscrow> "BUILED"
        }\
        """,
        quotation_id=quotation_id,
        payer_id=payer_id,
        escrow_payload=escrow_payload,
        escrow_fullfilment=escrow_fullfilment,
    )
