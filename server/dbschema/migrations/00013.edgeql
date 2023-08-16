CREATE MIGRATION m1vnwl3doma3cjkqpp6lva56omznsw3nalnyokrsn5uyf2f6gvvm2a
    ONTO m1a2dqfdlxeojwcxcng3gwgtxyhzoxrcw23yytfwivs7xqeuo3jatq
{
  ALTER TYPE default::Job {
      ALTER LINK approved_quotation_id {
          RENAME TO approved_quotation;
      };
  };
};
