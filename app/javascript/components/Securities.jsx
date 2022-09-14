loadSecurities = () => {
  const url = "api/v1/securities/index";
  fetch(url)
    .then((data) => {
      if (data.ok) {
        return data.json();
      }
      throw new Error("There is an error");
    })
    .then((data) => {
      data.forEach((security) => {
        const newEl = {
          key: security.id,
          id: security.id,
          place: security.brand,
          description: security.style,
          country: security.country,
          casualties: security.quantity,
        };

        this.setState((prevState) => ({
          securities: [...prevState.securities, newEl],
        }));
      });
    })
    .catch((err) => message.error("Error:  " + err));
};
