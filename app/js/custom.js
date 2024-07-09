import createRowTable from "./createRowTable.js";
function initializeWidget() {
  ZOHO.embeddedApp.on("PageLoad", () => {
    ZOHO.CRM.API.getAllRecords({ Entity: "Demerit_References" }).then((result) => {
      createRowTable(result.data);
    });
  });
  ZOHO.embeddedApp.init();
}

export default initializeWidget;
