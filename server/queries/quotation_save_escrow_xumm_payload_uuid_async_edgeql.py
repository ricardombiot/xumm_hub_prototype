# AUTOGENERATED FROM 'queries/quotation_save_escrow_xumm_payload_uuid.edgeql' WITH:
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
class QuotationSaveEscrowXummPayloadUuidResult(NoPydanticValidation):
    id: uuid.UUID


async def quotation_save_escrow_xumm_payload_uuid(
    executor: edgedb.AsyncIOExecutor,
    *,
    quotation_id: uuid.UUID,
    payer_id: uuid.UUID,
    escrow_xumm_payload_uuid: str,
) -> typing.Optional[QuotationSaveEscrowXummPayloadUuidResult]:
    return await executor.query_single(
        """\
        update default::Quotation 
        filter .id = <std::uuid> $quotation_id and .job.payer.id = <std::uuid> $payer_id 
        set {
          escrow_xumm_payload_uuid := <std::str> $escrow_xumm_payload_uuid,
          escrow_state := <default::StateQuotationEscrow> "WAITING_XUMM_SIGN"
        }\
        """,
        quotation_id=quotation_id,
        payer_id=payer_id,
        escrow_xumm_payload_uuid=escrow_xumm_payload_uuid,
    )
