UPDATE Quotation 
filter .id = <std::uuid> $quotation_id and
.state = <default::StateQuotation> "APPROVED" and
.destine.id = <std::uuid> $destine_id
set {
    state := <default::StateQuotation> "DONE" 
} 