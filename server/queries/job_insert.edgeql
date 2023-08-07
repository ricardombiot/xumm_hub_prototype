INSERT Job {
    payer := (SELECT User FILTER .id = <std::uuid> $user_id),
    title := <std::str> $job_title,
    description := <std::str> $job_description,
}