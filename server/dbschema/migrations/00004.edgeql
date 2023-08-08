CREATE MIGRATION m17vrla3nv7cmd435z6pn3hs3i3p5mcfosbfqipbsopw4ma4ydg5lq
    ONTO m12d6kuxgbn7n7bhaoxa3qneke3mxrck6cleqfywabr4vi7qveggda
{
  ALTER TYPE default::Job {
      DROP LINK destine;
  };
  ALTER TYPE default::Quotation {
      CREATE REQUIRED LINK destine: default::User {
          SET REQUIRED USING (<default::User>{});
      };
  };
};
