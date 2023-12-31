# AUTOGENERATED FROM 'queries/quotation_update.edgeql' WITH:
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
class QuotationUpdateResult(NoPydanticValidation):
    id: uuid.UUID


async def quotation_update(
    executor: edgedb.AsyncIOExecutor,
    *,
    quotation_id: uuid.UUID,
    quotation_description: str,
    quotation_total_amount: float,
    delta_days: int,
) -> typing.Optional[QuotationUpdateResult]:
    return await executor.query_single(
        """\
        UPDATE Quotation 
        filter .id = <std::uuid> $quotation_id and
        .state = <default::StateQuotation> "PUBLISHED"
        set {
            description := <std::str> $quotation_description,
            total_amount := <std::float64> $quotation_total_amount,
            delta_days := <std::int32> $delta_days
        }\
        """,
        quotation_id=quotation_id,
        quotation_description=quotation_description,
        quotation_total_amount=quotation_total_amount,
        delta_days=delta_days,
    )
