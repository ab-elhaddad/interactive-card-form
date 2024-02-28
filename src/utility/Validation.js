class Validation {
  /**
   * Validates cardholder name.
   * @param {string} cardholderName
   * @returns {string}
   */
  name(cardholderName) {
    if (!cardholderName) return `Can't be blank`;
    return "";
  }

  /**
   * Validates cardholder number.
   * @param {string} cardholderNumber
   * @returns {string}
   */
  number(cardholderNumber) {
    if (!cardholderNumber) return `Can't be blank`;

    // Checks if the card number is a number
    const cardNumberWithNoSpaces = cardholderNumber.replace(/\s/g, "");
    if (isNaN(cardNumberWithNoSpaces)) return "Should be a number";

    // Subtracts the number of spaces (4)
    if (cardholderNumber.length - 4 !== 16) return "Should be 16 digits";

    return "";
  }

  /**
   * Validates card expiration month.
   * @param {number} expDateMonth
   * @returns {string}
   */
  month(expDateMonth) {
    if (!expDateMonth) return `Can't be blank`;

    if (expDateMonth > 12 || expDateMonth < 1) return "Invalid month";

    return "";
  }

  /**
   * Validates card expiration year.
   * @param {number} expDateYear
   * @returns {string}
   */
  year(expDateYear) {
    if (!expDateYear) return `Can't be blank`;

    const now = new Date();
    if (expDateYear < now.getFullYear()) return "Already expired";

    return "";
  }

  /**
   * Validates card CVC.
   * @param {string} cvc
   * @returns {string}
   */
  cvc(cvc) {
    if (!cvc) return `Can't be blank`;

    if (cvc.length !== 3 && cvc.length !== 4) return "Invalid cvc number";
    return "";
  }
}

export default Validation;
