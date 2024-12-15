const validationMessages = {
  authModal: {
    login: {
      emailRequired: "O campo e-mail é obrigatório.",
      emailInvalid: "Digite um e-mail válido.",
      passwordRequired: "O campo senha é obrigatório.",
    },
    register: {
      nameRequired: "O nome completo é obrigatório.",
      nameInvalid:
        "O nome deve conter pelo menos um espaço e sem caracteres especiais.",
      phoneRequired: "O campo telefone é obrigatório.",
      phoneInvalid: "O telefone deve seguir o formato (DD) 9XXXX-XXXX.",
      emailRequired: "O campo e-mail é obrigatório.",
      emailInvalid: "Digite um e-mail válido.",
      passwordRequired: "O campo senha é obrigatório.",
      passwordMin: "A senha deve ter no mínimo 8 caracteres.",
      confirmPasswordRequired: "O campo confirmar senha é obrigatório.",
      passwordMismatch: "As senhas não coincidem.",
    },
  },
};

export default validationMessages;
