let createRowTable = (data) => {
  data.map((record) => {
    let tbody = document.querySelector("tbody");
    let row = document.createElement("tr");
    let leadName = document.createElement("td");
    let company = document.createElement("td");
    leadName.innerHTML = record.Last_Name;
    company.innerHTML = record.Company;
    row.appendChild(company);
    row.appendChild(leadName);
    tbody.appendChild(row);
  });
};

export default createRowTable;
