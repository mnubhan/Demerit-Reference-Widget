let createRowTable = (data) => {
  data.map((record) => {
    let tbody = document.querySelector("tbody");
    let row = document.createElement("tr");
    let refLetter = document.createElement("td");
    let description = document.createElement("td");
    let demeritPoint = document.createElement("td");
    refLetter.innerHTML = record.Ref_Letter;
    description.innerHTML = record.Description;
    demeritPoint.innerHTML = record.Demerit_Point;
    row.appendChild(refLetter);
    row.appendChild(description);
    row.appendChild(demeritPoint );
    tbody.appendChild(row);
  });
};

export default createRowTable;
