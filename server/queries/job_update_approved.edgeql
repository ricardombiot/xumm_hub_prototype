UPDATE Job
filter .id = <std::uuid> $job_id and
.payer.id = <std::uuid> $payer_id 
set {
    approved_quotation_id := (SELECT Quotation filter .id = <std::uuid> $approved_quotation_id )
} 