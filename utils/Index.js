import { format, parseISO } from "date-fns";

export default class Utils {

  static clone = (value) => {
    return JSON.parse(JSON.stringify(value)) || null;
  }

  static testRegex = (value, regex) => {
    return regex.test(value);
  }

  static numberToBRL = (num) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(num);
  };

  static urlParamBuilder = (params) => {
    const validParams = Object.entries(params)
      .filter(([_, value]) => value !== null && value !== "")
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`);

    if (validParams.length === 0) {
      return "";
    }
    return "?" + validParams.join("&");
  };


  static formatDateISO(date) {
    if (!date) {
      return '';
    }

    // Garantir que o parâmetro seja uma instância de Date
    const localDate = new Date(date);

    // Ajustar a data para o horário local
    localDate.setMinutes(localDate.getMinutes() - localDate.getTimezoneOffset());

    // Formatar a data no formato ISO-8601, sem a parte de tempo
    return localDate.toISOString().split('T')[0];
  }


  static formatToBRL = (value) => {
    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    return formatter.format(value) || 'não informado'
  };

  static formatDateToBR = (dateString) => {
    if (!dateString) {
      return ''
    }
    const formattedDate = format(parseISO(dateString), 'dd/MM/yyyy');
    return formattedDate;
  };

  static jwtToObject = (token) => {
    if (!token) {
      return null;
    }

    try {
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map((c) => `%${c.charCodeAt(0).toString(16).padStart(2, "0")}`)
          .join("")
      );
      return JSON.parse(jsonPayload);
    } catch (error) {
      console.error("Failed to parse JWT", error);
      return null;
    }
  };

  static removeCharacters = (str) => {
    return str ? str.replace(/[^a-zA-Z0-9]/g, '') : null
  }

  static copyToCliboard = async (text) => {
    let copied = false
    try {
      await navigator.clipboard.writeText(text);
      copied = true;
      setTimeout(() => copied = false, 2000);
    } catch (err) {
      console.error('Erro ao copiar texto: ', err);
    }
    return text;
  }

  static getUserInitials = (name) => {
    if (!name) return '';
    return name[0].toUpperCase() + name[1].toUpperCase()
  }



  static truncate = (str, length = 15) => {
    if (!str) return '';
    return str.length > length ? str.substring(0, length) + '...' : str;
  }






}
