CREATE MIGRATION m12d6kuxgbn7n7bhaoxa3qneke3mxrck6cleqfywabr4vi7qveggda
    ONTO m1oihccnks2uakbk2zdhgtewxhnztbtvjrhra3fkg2fssjega6u5fq
{
  ALTER TYPE default::Job {
      CREATE PROPERTY budget_range: std::str;
  };
  ALTER TYPE default::Quotation {
      ALTER PROPERTY total_amout {
          RENAME TO total_amount;
      };
  };
};
