UPDATE Quotation 
filter .id = <std::uuid> $quotation_id and
.state = <default::StateQuotation> "DONE" and
.job.payer.id = <std::uuid> $payer_id
set {
    state := <default::StateQuotation> "CONFIRMED"
} 