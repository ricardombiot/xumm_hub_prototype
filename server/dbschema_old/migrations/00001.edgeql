CREATE MIGRATION m1srazkyehq2gtrkxzvikh6enwnadvdihthprvhtbmhqtfjkdqjmqa
    ONTO initial
{
  CREATE FUTURE nonrecursive_access_policies;
  CREATE TYPE default::User {
      CREATE PROPERTY description: std::str;
      CREATE REQUIRED PROPERTY email: std::str;
      CREATE REQUIRED PROPERTY name: std::str;
      CREATE REQUIRED PROPERTY public_address: std::str;
  };
  CREATE TYPE default::Job {
      CREATE LINK destine: default::User;
      CREATE REQUIRED LINK payer: default::User;
      CREATE REQUIRED PROPERTY description: std::str;
      CREATE REQUIRED PROPERTY title: std::str;
  };
};
