INSERT Quotation {
    job := (SELECT Job FILTER .id = <std::uuid> $job_id),
    description := <std::str> $quotation_description,
    total_amount := <std::float64> $quotation_total_amount,
    destine := (SELECT User FILTER .id = <std::uuid> $destine_id),
    delta_days := <std::int32> $delta_days
}