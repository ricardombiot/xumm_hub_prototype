CREATE MIGRATION m1oihccnks2uakbk2zdhgtewxhnztbtvjrhra3fkg2fssjega6u5fq
    ONTO m1srazkyehq2gtrkxzvikh6enwnadvdihthprvhtbmhqtfjkdqjmqa
{
  CREATE TYPE default::Quotation {
      CREATE REQUIRED LINK job: default::Job;
      CREATE REQUIRED PROPERTY description: std::str;
      CREATE REQUIRED PROPERTY total_amout: std::float64;
  };
  ALTER TYPE default::Job {
      CREATE LINK quotations := (.<job[IS default::Quotation]);
  };
};
