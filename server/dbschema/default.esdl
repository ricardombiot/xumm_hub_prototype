module default {

  type User {
    required public_address -> str;
    required email -> str;
    required name -> str;
    description -> str;
  }

  type Job {
    required payer -> User;
    destine -> User;

    required title -> str;
    required description -> str;
  }

}
