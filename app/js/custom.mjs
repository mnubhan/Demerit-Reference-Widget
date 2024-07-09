import createRowTable from "./createRowTable.mjs";
function initializeWidget() {
  /*
   * Subscribe to the EmbeddedApp onPageLoad event before initializing the widget
   */
  ZOHO.embeddedApp.on("PageLoad", () => {
    ZOHO.CRM.API.getAllRecords({ Entity: "Leads" }).then((result) => {
      document.getElementById("recordInfo").innerHTML = JSON.stringify(
        result.data
      );
      console.log("Create Row Table Result",createRowTable(JSON.stringify(result.data)));
    });
  });
  ZOHO.embeddedApp.init();
}

export default initializeWidget;

