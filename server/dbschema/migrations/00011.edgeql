CREATE MIGRATION m1b5ehvq6cwk3htogj7e5uexq4xmqdqefd747akew73zvc3xd7oyea
    ONTO m1urmhcamp5q4coucrrdoiyvrk2kntpju6e3ocq74x5oqpjoep6uxq
{
  CREATE SCALAR TYPE default::StateQuotation EXTENDING enum<PUBLISHED, ACCEPTED, REJECTED>;
  ALTER TYPE default::Quotation {
      CREATE PROPERTY state: default::StateQuotation {
          SET default := (<default::StateQuotation>'PUBLISHED');
      };
  };
};
