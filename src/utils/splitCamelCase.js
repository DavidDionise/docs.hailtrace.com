const splitCamelCase = (str, capitalize) => {
  const modifier = (char, idx) => {
    return ` ${capitalize ? char.toUpperCase() : char.toLowerCase()}`;
  }

  const modified_str = str.replace(/[A-Z]/g, modifier)

  return (
    capitalize ?
    `${modified_str[0].toUpperCase()}${modified_str.substr(1)}` :
    `${modified_str[0].toLowerCase()}${modified_str.substr(1)}`
  );
}

module.exports = splitCamelCase;
