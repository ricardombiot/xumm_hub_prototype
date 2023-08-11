CREATE MIGRATION m1xahdxr4k4tuhzgwylawaxv2zq4c7hjurafoojhz34ghkyvuqluja
    ONTO m15nye7sculwnf7fqsfl4q2rgajjfn3ymfacsutqds5tbiezjr6wna
{
  ALTER TYPE default::Quotation {
      CREATE PROPERTY escrow_tx_uuid: std::str;
  };
};
