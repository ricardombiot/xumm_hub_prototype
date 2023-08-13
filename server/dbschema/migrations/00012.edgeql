CREATE MIGRATION m1a2dqfdlxeojwcxcng3gwgtxyhzoxrcw23yytfwivs7xqeuo3jatq
    ONTO m1b5ehvq6cwk3htogj7e5uexq4xmqdqefd747akew73zvc3xd7oyea
{
  ALTER TYPE default::Job {
      CREATE LINK approved_quotation_id: default::Quotation;
  };
  ALTER SCALAR TYPE default::StateQuotation EXTENDING enum<PUBLISHED, APPROVED>;
};
