CREATE MIGRATION m15nye7sculwnf7fqsfl4q2rgajjfn3ymfacsutqds5tbiezjr6wna
    ONTO m1ahpys7rcbgsbqzileujzv4yhcby4d3vrx5cjyuln2eb2fiidhyaq
{
  ALTER TYPE default::Quotation {
      CREATE PROPERTY escrow_fullfilment: std::str;
      CREATE PROPERTY escrow_payload: std::str;
  };
};
