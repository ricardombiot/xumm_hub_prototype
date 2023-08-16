CREATE MIGRATION m1vzosfvfjonz3fcqbxnawn466smzhvaxqe62h7b5dcws5vqsi4a4q
    ONTO m1y6a4jsdtoftmchk5xrgkulh2dqfydob4wmrtjjorgpz2eotsyxvq
{
  ALTER TYPE default::Job {
      CREATE PROPERTY created_at: std::datetime {
          SET default := (std::datetime_of_statement());
          SET readonly := true;
      };
  };
  ALTER TYPE default::Quotation {
      CREATE PROPERTY created_at: std::datetime {
          SET default := (std::datetime_of_statement());
          SET readonly := true;
      };
      CREATE PROPERTY escrow_checked_at: std::datetime;
  };
};
