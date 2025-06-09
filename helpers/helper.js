function extractPostOfficeData(postOffices) {
  if (!postOffices || postOffices.length === 0) {
    return null;
  }

  const first = postOffices[0];

  return {
    Name: first.Name,
    Pincode: first.Pincode,
    State: first.State,
    Country: first.Country
  };
}

module.exports = { extractPostOfficeData };
