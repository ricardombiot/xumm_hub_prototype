update default::Quotation 
filter .id = <std::uuid> $quotation_id and .job.payer.id = <std::uuid> $payer_id 
set {
  escrow_txid := <std::str> $escrow_txid,
  escrow_sequence := <std::int64> $escrow_sequence,
  escrow_state := <default::StateQuotationEscrow> "CHECKED"
} 