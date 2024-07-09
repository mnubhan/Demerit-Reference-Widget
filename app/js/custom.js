import createRowTable from "./createRowTable.js";
function initializeWidget() {
  ZOHO.embeddedApp.on("PageLoad", () => {
    ZOHO.CRM.API.getAllRecords({ Entity: "Leads" }).then((result) => {
      createRowTable(result.data);
    });
  });
  ZOHO.embeddedApp.init();
}

export default initializeWidget;
