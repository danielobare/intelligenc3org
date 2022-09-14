deleteSecurity = (id) => {
    const url = `api/v1/securities/${id}`;
  
    fetch(url, {
      method: "delete",
    })
      .then((data) => {
        if (data.ok) {
          this.reloadSecurities();
          return data.json();
        }
        throw new Error("There is an error.");
      })
      .catch((err) => message.error("Error:  " + err));
  };